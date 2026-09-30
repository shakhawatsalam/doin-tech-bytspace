import Image from "next/image";

interface CourseCardProps {
  image: string;
  title: string;
  rating?: number;
  creator?: string;
}

export default function CourseCard({
  image,
  title,
  rating = 4.5,
  creator = "purepearl studio",
}: CourseCardProps) {
  return (
    <article className='group overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white'>
      {/* Thumbnail */}
      <div className='relative aspect-[16/9] overflow-hidden'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
        />

        {/* Course information overlay */}
        <div className='absolute bottom-3 left-3 flex flex-wrap gap-2'>
          <span className='rounded-full bg-white/95 px-3 py-1.5 font-poppins text-[10px] font-medium text-brand-dark'>
            17 Lessons
          </span>

          <span className='rounded-full bg-white/95 px-3 py-1.5 font-poppins text-[10px] font-medium text-brand-dark'>
            2 hours 16 mins
          </span>

          <span className='rounded-full bg-white/95 px-3 py-1.5 font-poppins text-[10px] font-medium text-brand-dark'>
            59 Comments
          </span>
        </div>
      </div>

      {/* Content */}
      <div className='p-4 sm:p-5'>
        <div className='flex items-start justify-between gap-4'>
          <h3 className='font-display text-[16px] sm:text-[17px] font-semibold leading-tight tracking-[-0.02em] text-brand-dark'>
            {title}
          </h3>

          <div className='flex shrink-0 items-center gap-1 font-poppins text-sm'>
            <span className='text-brand-dark'>★</span>
            <span className='font-medium text-brand-dark'>{rating}</span>
          </div>
        </div>

        <p className='mt-3 font-poppins text-xs text-muted'>
          by <span className='font-medium text-brand-blue'>{creator}</span>
        </p>

        <div className='mt-5 flex items-center justify-between gap-3'>
          <span className='rounded-full bg-[#f3f3f3] px-3 py-1.5 font-poppins text-xs font-medium text-brand-dark'>
            Beginner
          </span>

          <div className='flex items-center'>
            <div className='flex -space-x-2'>
              <div className='h-7 w-7 rounded-full border-2 border-white bg-[#d8d8d8]' />
              <div className='h-7 w-7 rounded-full border-2 border-white bg-[#bcbcbc]' />
              <div className='h-7 w-7 rounded-full border-2 border-white bg-[#a0a0a0]' />
            </div>

            <span className='ml-2 rounded-full bg-brand-lime px-2.5 py-1.5 font-poppins text-[10px] font-semibold text-brand-dark'>
              26+
            </span>
          </div>
        </div>

        <div className='mt-5 border-t border-[#eeeeee] pt-4'>
          <span className='font-poppins text-sm font-semibold text-brand-dark'>
            $25
          </span>

          <span className='ml-1 font-poppins text-xs text-muted'>
            / lifetime
          </span>
        </div>
      </div>
    </article>
  );
}
