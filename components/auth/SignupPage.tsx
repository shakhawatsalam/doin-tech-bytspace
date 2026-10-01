"use client";

import Image from "next/image";
import Link from "next/link";
import CourseVisual from "./CourseVisual";

export default function SignupPage() {
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
        {/* =========================================================
            LEFT SIDE
        ========================================================= */}
        <section className='relative flex min-h-0 flex-col px-8 pb-8 pt-10 sm:px-12 lg:min-h-screen lg:px-16 lg:pb-16 xl:px-20'>
          {/* Logo */}
          <Link
            href='/'
            aria-label='ByteSpace home'
            className='inline-flex w-fit'>
            <Image
              src='/assets/brand/bytespace-icon.png'
              alt='ByteSpace'
              width={42}
              height={42}
              className='h-[42px] w-[42px]'
            />
          </Link>

          {/* Intro */}
          <div className='mt-14 max-w-[550px]'>
            <h1 className='font-poppins text-2xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl'>
              Sign up and come in
            </h1>

            <p className='mt-5 max-w-[550px] font-sans text-lg leading-8 text-white/90 sm:text-xl'>
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>
          </div>

          <CourseVisual />
        </section>

        {/* =========================================================
            RIGHT SIDE — SIGN UP FORM
        ========================================================= */}
        <section className='flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16'>
          <div className='w-full max-w-[590px] rounded-[28px] bg-white px-8 py-14 sm:px-12 sm:py-16 lg:min-h-[800px] lg:px-16 lg:py-[68px]'>
            <div className='flex h-full flex-col'>
              {/* Heading */}
              <div>
                <p className='font-poppins text-lg font-medium text-brand-blue'>
                  Create an Account
                </p>

                <h2 className='mt-3 max-w-[430px] font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-brand-dark sm:text-5xl'>
                  Welcome to
                  <br />
                  ByteSpace
                </h2>

                {/* Form */}
                <form className='mt-12 space-y-6'>
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor='fullName'
                      className='mb-2 block font-poppins text-sm font-medium text-brand-dark'>
                      Full Name
                    </label>

                    <input
                      id='fullName'
                      name='fullName'
                      type='text'
                      placeholder='Jamie Davis'
                      className='h-[54px] w-full rounded-[12px] border border-[#dddddd] bg-white px-5 font-sans text-base text-brand-dark outline-none transition-colors placeholder:text-[#999999] focus:border-brand-blue'
                    />
                  </div>

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
                      className='h-[54px] w-full rounded-[12px] border border-[#dddddd] bg-white px-5 font-sans text-base text-brand-dark outline-none transition-colors placeholder:text-[#999999] focus:border-brand-blue'
                    />
                  </div>

                  {/* Continue */}
                  <div className='flex justify-end pt-2'>
                    <button
                      type='submit'
                      className='rounded-full bg-brand-lime px-8 py-3.5 font-poppins text-base font-medium text-brand-dark transition-transform hover:scale-[1.02]'>
                      Continue
                    </button>
                  </div>
                </form>
              </div>

              {/* Login */}
              <p className='mt-auto pt-16 text-center font-sans text-base text-[#777777]'>
                Already have an account?{" "}
                <Link
                  href='/sign-in'
                  className='text-brand-blue hover:underline'>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
