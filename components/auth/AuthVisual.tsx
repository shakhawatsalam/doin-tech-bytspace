import Image from "next/image";

export default function AuthVisual() {
  return (
    <div className='relative h-[650px] w-full'>
      {/* Main course card */}
      <Image
        src='/assets/hero/hero-course-card.png'
        alt=''
        width={208}
        height={70}
        className='absolute left-[120px] top-[180px] z-20 w-[380px] h-auto'
      />

      {/* Second card behind */}
      <Image
        src='/assets/hero/hero-course-card.png'
        alt=''
        width={208}
        height={70}
        className='absolute left-[30px] top-[270px] z-10 w-[320px] h-auto opacity-90'
      />

      {/* Lime ring */}
      <div
        className='
          absolute
          left-[55px]
          top-[125px]
          z-30
          h-[115px]
          w-[115px]
          rounded-full
          border-[32px]
          border-brand-lime
        '
      />

      {/* White squiggle */}
      <Image
        src='/assets/decorative/white-squiggle-large.png'
        alt=''
        width={317}
        height={332}
        className='
          absolute
          right-[30px]
          bottom-[60px]
          z-30
          w-[120px]
          h-auto
        '
      />

      {/* Lime cone */}
      <Image
        src='/assets/decorative/lime-cone.png'
        alt=''
        width={190}
        height={189}
        className='
          absolute
          left-[20px]
          bottom-[0]
          z-30
          w-[130px]
          h-auto
        '
      />

      {/* Happy students */}
      <div
        className='
          absolute
          bottom-[25px]
          right-[20px]
          z-40
          rounded-3xl
          bg-brand-lime
          px-6
          py-5
          shadow-lg
        '>
        <p className='font-sans text-lg font-medium text-brand-dark'>
          Happy Students
        </p>

        <p className='mt-1 font-sans text-sm text-brand-dark'>4.5 (240) ★</p>

        <div className='mt-3 flex items-center'>
          <div className='flex -space-x-2'>
            {["sarah-m.png", "james-l.png", "alex-b.png"].map((avatar) => (
              <Image
                key={avatar}
                src={`/assets/testimonials/${avatar}`}
                alt=''
                width={42}
                height={42}
                className='h-10 w-10 rounded-full border-2 border-brand-lime object-cover'
              />
            ))}
          </div>

          <span className='ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark text-sm font-semibold text-white'>
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}
