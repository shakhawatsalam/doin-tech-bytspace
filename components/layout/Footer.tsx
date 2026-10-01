import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

const footerColumns = [
  {
    links: [
      "Featured Courses",
      "Featured Categories",
      "Business",
      "IT",
      "Design",
    ],
  },
  {
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    links: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];

export default function Footer() {
  return (
    <footer className='bg-white'>
      <Container className='pt-20 sm:pt-24 lg:pt-[90px]'>
        {/* Main footer */}
        <div className='grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20'>
          {/* Newsletter */}
          <div className='max-w-[720px]'>
            {/* Logo */}
            <Link
              href='/'
              className='inline-flex items-center gap-2'
              aria-label='ByteSpace home'>
              <Image
                src='/assets/brand/bytespace-icon.png'
                alt=''
                width={44}
                height={44}
                className='h-11 w-11'
              />

              <span className='font-display text-[30px] font-semibold tracking-[-0.04em] text-brand-dark'>
                ByteSpace
              </span>
            </Link>

            <p className='mt-7 font-sans text-[17px] leading-7 text-[#444444]'>
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter form */}
            <form className='mt-16 flex max-w-[720px] items-center gap-8'>
              <input
                type='email'
                placeholder='Enter your email'
                aria-label='Email address'
                className='h-[74px] min-w-0 flex-1 rounded-full border border-[#d2d2d2] bg-white px-8 font-sans text-[18px] text-brand-dark outline-none placeholder:text-[#444444] focus:border-brand-blue'
              />

              <button
                type='submit'
                className='h-[66px] shrink-0 rounded-full bg-brand-lime px-9 font-sans text-[18px] font-medium text-brand-dark transition-transform hover:scale-[1.02]'>
                Search
              </button>
            </form>

            <p className='mt-8 max-w-[700px] font-sans text-[16px] leading-7 text-[#444444]'>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label='Footer navigation'
            className='grid grid-cols-3 gap-8'>
            {footerColumns.map((column, columnIndex) => (
              <div key={columnIndex} className='flex flex-col gap-7'>
                {column.links.map((link) => (
                  <Link
                    key={link}
                    href='#'
                    className='font-sans text-[17px] leading-6 text-[#444444] transition-colors hover:text-brand-blue'>
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom divider */}
        <div className='mt-40 border-t border-[#d5d5d5] py-8'>
          <div className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
            <p className='font-sans text-[16px] text-[#444444]'>
              @ 2023 ByteSpace. All rights reserved.
            </p>

            <div className='flex flex-wrap gap-x-8 gap-y-3'>
              <Link
                href='#'
                className='font-sans text-[16px] text-[#444444] hover:text-brand-blue'>
                Privacy Policy
              </Link>

              <Link
                href='#'
                className='font-sans text-[16px] text-[#444444] hover:text-brand-blue'>
                Terms of Service
              </Link>

              <Link
                href='#'
                className='font-sans text-[16px] text-[#444444] hover:text-brand-blue'>
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
