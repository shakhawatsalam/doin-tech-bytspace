import Image from "next/image";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className='relative min-h-[800px] overflow-hidden bg-brand-blue sm:min-h-[880px] lg:min-h-[1024px]'>
      {/* Background Grid */}
      <div
        aria-hidden='true'
        className='absolute inset-0 opacity-[0.20]'
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255, 255, 255, 0.45) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.45) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "85px 85px",
        }}
      />

      {/* =========================
          Decorative Shapes
      ========================== */}

      {/* Left lime shape */}
      <Image
        src='/assets/hero/hero-lime-shape.svg'
        alt=''
        width={300}
        height={387}
        aria-hidden='true'
        className='absolute left-0 top-[210px] z-1 hidden xl:block'
      />

      {/* Left white squiggle */}
      <Image
        src='/assets/decorative/white-squiggle-small.svg'
        alt=''
        width={177}
        height={176}
        aria-hidden='true'
        className='absolute left-[12%] top-[500px] z-[2] hidden lg:block'
      />
      <Image
        src='/assets/decorative/ring-cone.svg'
        alt=''
        width={342}
        height={342}
        aria-hidden='true'
        className='absolute left-[12%] top-[682px] z-10 hidden 2xl:block'
      />

      {/* Right lime cone/shape */}
      <Image
        src='/assets/decorative/lime-cone.svg'
        alt=''
        width={190}
        height={189}
        aria-hidden='true'
        className='absolute right-[12%] top-[500px] z-[1] hidden lg:block'
      />

      {/* Right white cone */}
      <Image
        src='/assets/decorative/white-cone-large.svg'
        alt=''
        width={250}
        height={372}
        aria-hidden='true'
        className='absolute right-0 top-[210px] z-1 hidden xl:block'
      />

      {/* Right white squiggle */}
      <Image
        src='/assets/decorative/white-squiggle-large.png'
        alt=''
        width={330}
        height={330}
        aria-hidden='true'
        className='absolute bottom-[10px] right-[12%] z-10 hidden w-[180px] lg:block xl:w-[330px]'
      />

      {/* =========================
          Hero Content
      ========================== */}

      <Container className='relative z-10 pt-[135px] md:pt-[155px]'>
        <div className='mx-auto flex max-w-[1000px] flex-col items-center text-center'>
          {/* Heading */}
          <h1 className='mt-5 max-w-[900px] font-poppins text-[clamp(2rem,8vw,3rem)] font-semibold leading-[0.98] tracking-normal text-white sm:text-5xl md:text-6xl lg:text-[72px]'>
            Get Access to Hundreds
            <br className='hidden md:block' />
            of Courses Available
          </h1>

          {/* Description */}
          <p className='mt-8 max-w-[850px] font-sans text-base leading-7 text-white/80 sm:text-lg'>
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search */}
          <div className='lg:mt-10 mt-0 flex w-full max-w-[580px] items-center rounded-full bg-white p-2'>
            <div className='flex min-w-0 flex-1 items-center gap-3 px-5'>
              {/* Search icon */}
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                className='shrink-0 text-[#777777]'
                aria-hidden='true'>
                <circle
                  cx='11'
                  cy='11'
                  r='6.5'
                  stroke='currentColor'
                  strokeWidth='1.8'
                />

                <path
                  d='M16 16L21 21'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                />
              </svg>

              <input
                type='text'
                placeholder='Course, topic, creator'
                aria-label='Search courses'
                className='min-w-0 flex-1 bg-transparent font-poppins text-sm text-brand-dark outline-none placeholder:text-[#999999]'
              />
            </div>

            <button
              type='button'
              className='shrink-0 rounded-full bg-brand-lime px-5 py-3.5 font-poppins text-sm font-semibold text-brand-dark transition-transform hover:scale-[1.02] sm:px-7'>
              Search
            </button>
          </div>
        </div>
      </Container>

      {/* =========================
          Hero Artwork
      ========================== */}

      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 bottom-0 z-[5] hidden h-[470px] md:block'>
        {/* Lime Ellipse */}
        <Image
          src='/assets/hero/hero-ellipse.png'
          alt=''
          width={1149}
          height={442}
          priority
          className='absolute bottom-[0px] left-1/2 w-[950px] max-w-none -translate-x-1/2 lg:w-[1100px] xl:w-[1149px]'
        />

        {/* Main Person */}
        <Image
          src='/assets/hero/hero-person.png'
          alt=''
          width={578}
          height={541}
          priority
          className='absolute bottom-0 left-1/2 z-[3] w-[520px] max-w-none -translate-x-1/2 lg:w-[650px] xl:w-[710px]'
        />

        {/* UI/UX Course Card */}
        <Image
          src='/assets/hero/hero-course-card1.png'
          alt=''
          width={208}
          height={70}
          className='absolute bottom-[300px] left-[calc(50%-390px)] z-[6] hidden w-[208px] lg:block lg:left-[calc(50%-370px)]'
        />

        {/* Learning Progress Card */}
        <Image
          src='/assets/hero/hero-progress-card.png'
          alt=''
          width={232}
          height={131}
          className='absolute bottom-[265px] left-[calc(50%+75px)] z-[6] hidden w-[232px] lg:block lg:left-[calc(50%+80px)]'
        />

        {/* Happy Students Card */}
        <Image
          src='/assets/hero/hero-students-card.png'
          alt=''
          width={258}
          height={121}
          className='absolute bottom-[70px] left-[calc(50%-530px)] z-[6] hidden w-[258px] lg:block lg:left-[calc(50%-420px)]'
        />
      </div>

      {/* Mobile Hero Artwork */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[300px] md:hidden'>
        <Image
          src='/assets/hero/hero-ellipse.png'
          alt=''
          width={1149}
          height={442}
          className='absolute bottom-[-30px] left-1/2 w-full max-w-[700px] -translate-x-1/2'
        />

        <Image
          src='/assets/hero/hero-person.png'
          alt=''
          width={722}
          height={515}
          className='absolute bottom-[-5px] left-1/2 z-[3] w-full max-w-[390px] -translate-x-1/2'
        />
      </div>
    </section>
  );
}
