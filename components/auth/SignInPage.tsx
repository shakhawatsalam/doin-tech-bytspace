"use client";

import Image from "next/image";
import Link from "next/link";
import CourseVisual from "./CourseVisual";

export default function SignInPage() {
  return (
    <main className='relative min-h-screen overflow-hidden bg-brand-blue'>
      {/* Background Grid */}
      <div
        aria-hidden='true'
        className='absolute inset-0 opacity-[0.2]'
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255, 255, 255, 0.4) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.4) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "122px 122px",
        }}
      />

      <div className='relative z-10 mx-auto grid min-h-screen max-w-[1500px] grid-cols-1 lg:grid-cols-[1fr_1fr]'>
        {/* =========================
            LEFT SIDE
        ========================= */}
        <div className='relative flex min-h-0 flex-col px-8 pb-8 pt-10 sm:px-12 lg:min-h-screen lg:px-16 lg:pb-16 xl:px-20'>
          {/* Logo */}
          <Link
            href='/'
            aria-label='ByteSpace home'
            className='inline-flex w-fit'>
            <Image
              src='/assets/brand/bytespace-icon.svg'
              alt='ByteSpace'
              width={42}
              height={42}
              className='h-[42px] w-[42px]'
            />
          </Link>

          {/* Intro */}
          <div className='mt-14 max-w-[560px]'>
            <h1 className='font-poppins text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl'>
              Sign in with ease
            </h1>

            <p className='mt-5 max-w-[550px] font-sans text-lg leading-8 text-white/90 sm:text-xl'>
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          <CourseVisual />
        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}
        <div className='flex items-center justify-center px-5 py-8 sm:px-10 lg:px-12 xl:px-16'>
          <div className='w-full max-w-[590px] rounded-[28px] bg-white px-8 py-12 sm:px-12 sm:py-14 lg:min-h-[800px] lg:px-16 lg:py-[68px]'>
            <div className='flex h-full flex-col'>
              <div>
                {/* Eyebrow */}
                <p className='font-poppins text-lg font-medium text-brand-blue'>
                  Sign In
                </p>

                {/* Heading */}
                <h2 className='mt-3 font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-brand-dark sm:text-5xl'>
                  Welcome Back
                </h2>

                {/* Form */}
                <form className='mt-12 space-y-6'>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor='email'
                      className='mb-2 block font-poppins text-sm font-medium text-brand-dark'>
                      Email
                    </label>

                    <input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='designer@example.com'
                      autoComplete='email'
                      className='h-[54px] w-full rounded-[12px] border border-[#dddddd] bg-white px-5 font-sans text-base text-brand-dark outline-none transition-colors placeholder:text-[#999999] focus:border-brand-blue'
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor='password'
                      className='mb-2 block font-poppins text-sm font-medium text-brand-dark'>
                      Password
                    </label>

                    <input
                      id='password'
                      name='password'
                      type='password'
                      placeholder='********'
                      autoComplete='current-password'
                      className='h-[54px] w-full rounded-[12px] border border-[#dddddd] bg-white px-5 font-sans text-base text-brand-dark outline-none transition-colors placeholder:text-[#999999] focus:border-brand-blue'
                    />
                  </div>

                  {/* Sign In Button */}
                  <div className='flex justify-end pt-2'>
                    <button
                      type='submit'
                      className='rounded-full bg-brand-lime px-8 py-3.5 font-poppins text-base font-medium text-brand-dark transition-transform hover:scale-[1.02]'>
                      Sign In
                    </button>
                  </div>
                </form>

                {/* Divider */}
                <div className='mt-20 flex items-center gap-3'>
                  <div className='h-px flex-1 bg-[#d7d7d7]' />

                  <span className='font-sans text-base text-[#888888]'>or</span>

                  <div className='h-px flex-1 bg-[#d7d7d7]' />
                </div>

                {/* Social Buttons */}
                <div className='mt-10 flex justify-center gap-4'>
                  {/* Facebook */}
                  <button
                    type='button'
                    aria-label='Continue with Facebook'
                    className='flex h-[74px] w-[74px] items-center justify-center rounded-[20px] border border-[#d8d8d8] bg-white transition-colors hover:bg-[#f7f7f7]'>
                    <svg
                      width='30'
                      height='30'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      aria-hidden='true'>
                      <path d='M14 8h3V4h-3c-3.31 0-5 1.69-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.66.34-1 1-1Z' />
                    </svg>
                  </button>

                  {/* Google */}
                  <button
                    type='button'
                    aria-label='Continue with Google'
                    className='flex h-[74px] w-[74px] items-center justify-center rounded-[20px] border border-[#d8d8d8] bg-white transition-colors hover:bg-[#f7f7f7]'>
                    <span className='font-sans text-[30px] font-semibold text-brand-dark'>
                      G
                    </span>
                  </button>
                </div>
              </div>

              {/* Create Account */}
              <p className='mt-auto pt-16 text-center font-sans text-base text-[#777777]'>
                New user?{" "}
                <Link href='/join' className='text-brand-blue hover:underline'>
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
