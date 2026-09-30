import Image from "next/image";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className='relative min-h-[1024px] overflow-hidden bg-brand-blue'>
      {/* Background Grid */}
      <div
        aria-hidden='true'
        className='absolute inset-0 opacity-[0.18]'
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
          backgroundSize: "70px 70px",
        }}
      />

      {/* =========================
          Decorative Shapes
      ========================== */}

      {/* Left lime shape */}
      <Image
        src='/assets/hero/hero-lime-shape.png'
        alt=''
        width={266}
        height={387}
        aria-hidden='true'
        className='absolute left-0 top-[285px] z-[1] hidden md:block'
      />

      {/* Left white squiggle */}
      <Image
        src='/assets/decorative/white-squiggle-small.png'
        alt=''
        width={177}
        height={176}
        aria-hidden='true'
        className='absolute left-[12%] top-[500px] z-[2] hidden lg:block'
      />

      {/* Right lime cone/shape */}
      <Image
        src='/assets/decorative/lime-cone.png'
        alt=''
        width={190}
        height={189}
        aria-hidden='true'
        className='absolute right-[-15px] top-[230px] z-[1] hidden md:block'
      />

      {/* Right white cone */}
      <Image
        src='/assets/decorative/white-cone-large.png'
        alt=''
        width={213}
        height={372}
        aria-hidden='true'
        className='absolute right-[9%] top-[485px] z-[2] hidden lg:block'
      />

      {/* Left white ring */}
      <div
        aria-hidden='true'
        className='absolute bottom-[-40px] left-[4%] z-[2] hidden h-[215px] w-[215px] rounded-full border-[62px] border-white lg:block'
      />

      {/* Right white squiggle */}
      <Image
        src='/assets/decorative/white-squiggle-large.png'
        alt=''
        width={317}
        height={332}
        aria-hidden='true'
        className='absolute bottom-[45px] right-[3%] z-[2] hidden w-[180px] lg:block xl:w-[220px]'
      />

      {/* =========================
          Hero Content
      ========================== */}

      <Container className='relative z-10 pt-[155px]'>
        <div className='mx-auto flex max-w-[1000px] flex-col items-center text-center'>
          {/* Eyebrow */}
          <p className='font-poppins text-sm font-medium text-brand-lime'>
            ByteSpace
          </p>

          {/* Heading */}
          <h1 className='mt-5 max-w-[900px] font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[72px]'>
            Get Access to Hundreds
            <br />
            of Courses Available
          </h1>

          {/* Description */}
          <p className='mt-8 max-w-[760px] font-sans text-base leading-7 text-white/80 sm:text-lg'>
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search */}
          <div className='mt-10 flex w-full max-w-[580px] items-center rounded-full bg-white p-2'>
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
              className='shrink-0 rounded-full bg-brand-lime px-7 py-3.5 font-poppins text-sm font-semibold text-brand-dark transition-transform hover:scale-[1.02]'>
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
          className='absolute bottom-[-15px] left-1/2 w-[950px] max-w-none -translate-x-1/2 lg:w-[1100px] xl:w-[1149px]'
        />

        {/* Main Person */}
        <Image
          src='/assets/hero/hero-person.png'
          alt=''
          width={722}
          height={515}
          priority
          className='absolute bottom-[-8px] left-1/2 z-[3] w-[520px] max-w-none -translate-x-1/2 lg:w-[650px] xl:w-[710px]'
        />

        {/* UI/UX Course Card */}
        <Image
          src='/assets/hero/hero-course-card.png'
          alt=''
          width={208}
          height={70}
          className='absolute bottom-[285px] left-[calc(50%-390px)] z-[6] w-[208px] lg:left-[calc(50%-470px)]'
        />

        {/* Learning Progress Card */}
        <Image
          src='/assets/hero/hero-progress-card.png'
          alt=''
          width={232}
          height={131}
          className='absolute bottom-[210px] left-[calc(50%+75px)] z-[6] w-[232px] lg:left-[calc(50%+80px)]'
        />

        {/* Happy Students Card */}
        <Image
          src='/assets/hero/hero-students-card.png'
          alt=''
          width={258}
          height={121}
          className='absolute bottom-[35px] left-[calc(50%-530px)] z-[6] w-[258px] lg:left-[calc(50%-545px)]'
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
          className='absolute bottom-[-30px] left-1/2 w-[700px] max-w-none -translate-x-1/2'
        />

        <Image
          src='/assets/hero/hero-person.png'
          alt=''
          width={722}
          height={515}
          className='absolute bottom-[-5px] left-1/2 z-[3] w-[390px] max-w-none -translate-x-1/2'
        />
      </div>
    </section>
  );
}
