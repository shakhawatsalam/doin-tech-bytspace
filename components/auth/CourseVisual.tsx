import Image from "next/image";

export default function CourseVisual() {
  return (
    <div className='relative mx-auto mt-16 hidden h-[500px] w-full max-w-[600px] lg:absolute lg:bottom-[55px] lg:left-1/2 lg:mt-0 lg:block lg:-translate-x-1/2'>
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
            <span className='text-sm font-normal text-[#666]'>/lifetime</span>
          </p>
        </div>
      </div>

      {/* -------------------------------------------------
          MAIN COURSE CARD
      ------------------------------------------------- */}
      <div className='absolute left-[95px] -top-24 z-20 w-[385px] overflow-hidden rounded-[22px] bg-white p-4 shadow-2xl'>
        <div className='relative aspect-[1.65/1] overflow-hidden rounded-[15px]'>
          <Image
            src='/assets/courses/money-management.png'
            alt='The Power of Big Data'
            fill
            className='object-cover'
          />

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
              <Image
                src='/assets/testimonials/student01.png'
                alt=''
                width={36}
                height={36}
                className='h-9 w-9 rounded-full border-2 border-white object-cover'
              />
              <Image
                src='/assets/testimonials/student02.png'
                alt=''
                width={36}
                height={36}
                className='h-9 w-9 rounded-full border-2 border-white object-cover'
              />
              <Image
                src='/assets/testimonials/student03.png'
                alt=''
                width={36}
                height={36}
                className='h-9 w-9 rounded-full border-2 border-white object-cover'
              />
              <Image
                src='/assets/testimonials/student04.png'
                alt=''
                width={36}
                height={36}
                className='h-9 w-9 rounded-full border-2 border-white object-cover'
              />

              <span className='flex h-9 w-9 items-center justify-center rounded-full bg-black font-poppins text-xs text-white'>
                26+
              </span>
            </div>
          </div>

          <p className='mt-5 font-poppins text-2xl font-semibold text-brand-blue'>
            $25
            <span className='text-sm font-normal text-[#666]'>/lifetime</span>
          </p>
        </div>
      </div>

      {/* -------------------------------------------------
          HERO COURSE CARD AS DECORATIVE FLOATING CARD
      ------------------------------------------------- */}

      <Image
        src='/assets/decorative/lime-cer.svg'
        alt=''
        width={177}
        height={176}
        className='absolute top-[10px] left-[5px] z-30 w-[180px] h-auto'
      />

      <Image
        src='/assets/decorative/white-squiggle-small.png'
        alt=''
        width={177}
        height={176}
        className='absolute bottom-[55px] right-[15px] z-40 w-[180px] h-auto'
      />

      <Image
        src='/assets/decorative/happy-student-lime.png'
        alt=''
        width={258}
        height={121}
        className='absolute bottom-[5px] right-[-10px] z-30 w-[265px] h-auto'
      />

      <Image
        src='/assets/decorative/white-cone.svg'
        alt=''
        width={190}
        height={189}
        className='absolute -bottom-[70px] left-[-20px] z-30 w-[235px] h-auto rotate-12'
      />
    </div>
  );
}
