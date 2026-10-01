"use client";

import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className='relative min-h-screen overflow-hidden bg-brand-blue'>
      {/* Background grid */}
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
        {/* =========================================
            LEFT SIDE
        ========================================= */}
        <div className='relative flex min-h-[650px] flex-col px-8 pb-16 pt-10 sm:px-12 lg:min-h-screen lg:px-16 xl:px-20'>
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
            <h1 className='font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl'>
              Sign in with ease
            </h1>

            <p className='mt-5 max-w-[550px] font-sans text-lg leading-8 text-white/90 sm:text-xl'>
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          {/* Course composition */}
          <div className='relative mx-auto mt-16 h-[470px] w-full max-w-[580px] lg:absolute lg:bottom-[70px] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2'>
            {/* Back course card */}
            <div className='absolute left-0 top-[90px] h-[390px] w-[300px] overflow-hidden rounded-[20px] bg-white'>
              <Image
                src='/assets/courses/digital-assets.png'
                alt=''
                fill
                className='object-cover'
              />

              <div className='absolute inset-x-4 bottom-5'>
                <span className='rounded-full bg-white px-4 py-2 font-poppins text-xs text-brand-dark'>
                  17 Lessons
                </span>
              </div>

              <div className='absolute bottom-[-1px] left-4'>
                <h3 className='font-display text-xl font-semibold text-brand-dark'>
                  Build Digital Asset
                </h3>

                <p className='mt-1 font-poppins text-xs text-brand-blue'>
                  by purepearl studio
                </p>

                <div className='mt-4 rounded-full bg-[#f1f1f1] px-3 py-2 font-poppins text-xs'>
                  Beginner
                </div>

                <p className='mt-5 font-poppins text-xl font-semibold text-brand-blue'>
                  $25
                  <span className='text-xs font-normal text-[#666]'>
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            {/* Main course card */}
            <div className='absolute left-[100px] top-0 z-10 w-[380px] overflow-hidden rounded-[22px] bg-white p-4 shadow-2xl'>
              <div className='relative aspect-[1.65/1] overflow-hidden rounded-[14px]'>
                <Image
                  src='/assets/courses/big-data.png'
                  alt='The Power of Big Data'
                  fill
                  className='object-cover'
                />

                <div className='absolute bottom-3 left-3 flex gap-2'>
                  <span className='rounded-full bg-white/90 px-3 py-2 font-poppins text-[10px]'>
                    17 Lessons
                  </span>

                  <span className='rounded-full bg-white/90 px-3 py-2 font-poppins text-[10px]'>
                    2 hours 16 mins
                  </span>

                  <span className='rounded-full bg-white/90 px-3 py-2 font-poppins text-[10px]'>
                    59 Comments
                  </span>
                </div>
              </div>

              <div className='px-1 pb-2 pt-4'>
                <div className='flex items-center justify-between gap-4'>
                  <h2 className='font-display text-xl font-semibold text-brand-dark'>
                    the Power of Big Data
                  </h2>

                  <span className='shrink-0 font-poppins text-sm'>
                    4.5 <span className='text-brand-lime'>★</span>
                  </span>
                </div>

                <p className='mt-2 font-poppins text-xs text-[#666]'>
                  by <span className='text-brand-blue'>purepearl studio</span>
                </p>

                <div className='mt-4 flex items-center justify-between'>
                  <span className='rounded-full bg-[#f1f1f1] px-3 py-2 font-poppins text-xs'>
                    Beginner
                  </span>

                  <div className='flex -space-x-2'>
                    <div className='h-8 w-8 rounded-full border-2 border-white bg-[#bdbdbd]' />
                    <div className='h-8 w-8 rounded-full border-2 border-white bg-[#8d8d8d]' />
                    <div className='flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black font-poppins text-[10px] text-white'>
                      26+
                    </div>
                  </div>
                </div>

                <p className='mt-5 font-poppins text-xl font-semibold text-brand-blue'>
                  $25
                  <span className='text-xs font-normal text-[#666]'>
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            {/* Lime ring */}
            <div
              aria-hidden='true'
              className='absolute left-[55px] top-[40px] z-20 h-[92px] w-[92px] rotate-[-12deg] rounded-full border-[30px] border-brand-lime'
            />

            {/* White squiggle */}
            <Image
              src='/assets/decorative/white-squiggle-small.png'
              alt=''
              width={177}
              height={176}
              className='absolute bottom-[25px] right-[35px] z-30 w-[115px]'
            />

            {/* Happy students */}
            <Image
              src='/assets/creators/happy-students-card.png'
              alt=''
              width={258}
              height={121}
              className='absolute bottom-0 right-0 z-40 w-[265px]'
            />

            {/* Lime cone */}
            <Image
              src='/assets/decorative/lime-cone.png'
              alt=''
              width={190}
              height={189}
              className='absolute bottom-0 left-[-10px] z-30 w-[125px]'
            />
          </div>
        </div>

        {/* =========================================
            RIGHT SIDE
        ========================================= */}
        <div className='flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16'>
          <div className='w-full max-w-[590px] rounded-[28px] bg-white px-8 py-14 sm:px-12 sm:py-16 lg:min-h-[800px] lg:px-16 lg:py-[68px]'>
            <div className='flex h-full flex-col'>
              <div>
                {/* Eyebrow */}
                <p className='font-poppins text-lg font-medium text-brand-blue'>
                  Sign In
                </p>

                {/* Heading */}
                <h2 className='mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-brand-dark sm:text-5xl'>
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

                  {/* Sign in */}
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

                {/* Social buttons */}
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

              {/* Create account */}
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
