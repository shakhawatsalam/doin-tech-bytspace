"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "#courses",
  },
  {
    label: "Creators",
    href: "#creators",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <div className='mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10'>
        <nav className='flex h-[88px] items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center gap-2'
            aria-label='ByteSpace home'>
            <Image
              src='/assets/brand/bytespace-icon.png'
              alt=''
              width={28}
              height={28}
              priority
            />

            <span className='font-display text-xl font-semibold text-white'>
              ByteSpace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden items-center gap-10 md:flex'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='font-poppins text-sm font-medium text-white transition-colors hover:text-brand-lime'>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className='hidden items-center gap-6 md:flex'>
            <Link
              href='/sign-in'
              className='font-poppins text-sm font-medium text-white transition-colors hover:text-brand-lime'>
              Sign In
            </Link>

            <Link
              href='/join'
              className='rounded-full bg-brand-lime px-6 py-3 font-poppins text-sm font-semibold text-brand-dark transition-transform hover:scale-[1.03]'>
              Join Us
            </Link>

            {/* Shopping Bag */}
            <button
              type='button'
              aria-label='Shopping bag'
              className='text-white transition-colors hover:text-brand-lime'>
              <svg
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'>
                <path
                  d='M6 8H18L19 21H5L6 8Z'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinejoin='round'
                />
                <path
                  d='M9 8V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V8'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type='button'
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className='flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'>
              {isOpen ? (
                <path
                  d='M6 6L18 18M18 6L6 18'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              ) : (
                <>
                  <path
                    d='M4 7H20'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 12H20'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <path
                    d='M4 17H20'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='rounded-2xl bg-white p-5 shadow-xl md:hidden'>
            <div className='flex flex-col gap-2'>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className='rounded-xl px-4 py-3 font-poppins text-sm font-medium text-brand-dark transition-colors hover:bg-surface'>
                  {item.label}
                </Link>
              ))}

              <div className='my-2 h-px bg-border' />

              <Link
                href='/sign-in'
                onClick={() => setIsOpen(false)}
                className='rounded-xl px-4 py-3 font-poppins text-sm font-medium text-brand-dark'>
                Sign In
              </Link>

              <Link
                href='/join'
                onClick={() => setIsOpen(false)}
                className='rounded-full bg-brand-lime px-5 py-3 text-center font-poppins text-sm font-semibold text-brand-dark'>
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
