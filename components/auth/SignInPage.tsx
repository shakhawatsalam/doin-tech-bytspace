"use client";

import Image from "next/image";
import Link from "next/link";

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
        <div className='relative flex min-h-[700px] flex-col px-8 pb-16 pt-10 sm:px-12 lg:min-h-screen lg:px-16 xl:px-20'>
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
          <div className='mt-14 max-w-[560px]'>
            <h1 className='font-poppins text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl'>
              Sign in with ease
            </h1>

            <p className='mt-5 max-w-[550px] font-sans text-lg leading-8 text-white/90 sm:text-xl'>
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          {/* =====================================================
               COURSE VISUAL
          ===================================================== */}
          <div className='relative mx-auto mt-16 h-[500px] w-full max-w-[600px] lg:absolute lg:bottom-[55px] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2'>
            {/* -------------------------------------------------
                BACK COURSE CARD
            ------------------------------------------------- */}
            <div className='absolute left-0 top-[40px] z-10 h-[390px] w-[385px] overflow-hidden rounded-[22px] bg-white shadow-xl'>
              <div className='relative h-[225px] overflow-hidden rounded-t-[22px]'>
                <Image
                  src='/assets/courses/startup.png'
                  alt=''
                  fill
                  className='object-cover'
                />

                <div className='absolute bottom-5 left-4'>
                  <span className='rounded-full bg-white/90 px-4 py-2 font-poppins text-xs text-brand-dark'>
                    17 Lessons
                  </span>
                </div>
              </div>

              <div className='px-5 pt-5'>
                <h2 className='font-display text-2xl font-semibold text-brand-dark'>
                  Build Digital Assets
                </h2>

                <p className='mt-1 font-poppins text-sm text-[#666]'>
                  by <span className='text-brand-blue'>purepearl studio</span>
                </p>

                <div className='mt-5'>
                  <span className='rounded-full bg-[#f1f1f1] px-4 py-2 font-poppins text-xs text-[#555]'>
                    Beginner
                  </span>
                </div>

                <p className='mt-5 font-poppins text-2xl font-semibold text-brand-blue'>
                  $25
                  <span className='text-sm font-normal text-[#666]'>
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            {/* -------------------------------------------------
                MAIN COURSE CARD
            ------------------------------------------------- */}
            <div className='absolute left-[95px] -top-24 z-20 w-[385px] overflow-hidden rounded-[22px] bg-white p-4 shadow-2xl'>
              {/* Thumbnail */}
              <div className='relative aspect-[1.65/1] overflow-hidden rounded-[15px]'>
                <Image
                  src='/assets/courses/money-management.png'
                  alt='The Power of Big Data'
                  fill
                  className='object-cover'
                />

                {/* Course meta pills */}
                <div className='absolute bottom-3 left-3 right-3 flex gap-2'>
                  <span className='rounded-full bg-white/90 px-3 py-2 font-poppins text-[10px] text-[#555]'>
                    17 Lessons
                  </span>

                  <span className='rounded-full bg-white/90 px-3 py-2 font-poppins text-[10px] text-[#555]'>
                    2 hours 16 mins
                  </span>

                  <span className='rounded-full bg-white/90 px-3 py-2 font-poppins text-[10px] text-[#555]'>
                    59 Comments
                  </span>
                </div>
              </div>

              {/* Course information */}
              <div className='px-1 pb-2 pt-5'>
                <div className='flex items-center justify-between gap-3'>
                  <h2 className='font-poppins text-[24px] font-semibold leading-tight text-brand-dark'>
                    The Power of Big Data
                  </h2>

                  <span className='shrink-0 font-poppins text-lg text-[#555]'>
                    4.5 <span className='text-xl text-brand-lime'>★</span>
                  </span>
                </div>

                <p className='mt-2 font-poppins text-sm text-[#666]'>
                  by <span className='text-brand-blue'>purepearl studio</span>
                </p>

                <div className='mt-5 flex items-center justify-between'>
                  <span className='rounded-full bg-[#f1f1f1] px-4 py-2 font-poppins text-xs text-[#555]'>
                    Beginner
                  </span>

                  <div className='flex items-center -space-x-2'>
                    <div className='h-9 w-9 rounded-full bg-[#777]' />
                    <div className='h-9 w-9 rounded-full bg-[#aaa]' />
                    <div className='h-9 w-9 rounded-full bg-[#e5b72f]' />
                    <div className='h-9 w-9 rounded-full bg-[#8fa7bd]' />

                    <span className='flex h-9 w-9 items-center justify-center rounded-full bg-black font-poppins text-xs text-white'>
                      26+
                    </span>
                  </div>
                </div>

                <p className='mt-5 font-poppins text-2xl font-semibold text-brand-blue'>
                  $25
                  <span className='text-sm font-normal text-[#666]'>
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            {/* -------------------------------------------------
                HERO COURSE CARD AS DECORATIVE FLOATING CARD
            ------------------------------------------------- */}

            {/* Lime Ring */}
            <Image
              src='/assets/decorative/lime-cer.svg'
              alt=''
              width={177}
              height={176}
              className='absolute top-[10px] left-[5px] z-30 h-auto w-[180px]'
            />

            {/* White Squiggle */}
            <Image
              src='/assets/decorative/white-squiggle-small.png'
              alt=''
              width={177}
              height={176}
              className='absolute bottom-[55px] right-[15px] z-40 h-auto w-[180px]'
            />

            {/* Happy Students */}
            <Image
              src='/assets/decorative/happy-student-lime.png'
              alt=''
              width={258}
              height={121}
              className='absolute bottom-[5px] right-[-10px] z-30 h-auto w-[265px]'
            />

            {/* Lime Cone */}
            <Image
              src='/assets/decorative/white-cone.svg'
              alt=''
              width={190}
              height={189}
              className='absolute -bottom-[70px] left-[-20px] z-30 h-auto w-[235px] rotate-12'
            />
          </div>
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
