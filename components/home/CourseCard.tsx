import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
  image: string;
  title: string;
  rating?: number;
  creator?: string;
}

const studentAvatars = [
  "/assets/testimonials/student01.png",
  "/assets/testimonials/student02.png",
  "/assets/testimonials/student03.png",
  "/assets/testimonials/student04.png",
];

export default function CourseCard({
  image,
  title,
  rating = 4.5,
  creator = "purepearl studio",
}: CourseCardProps) {
  return (
    <article className='group overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white'>
      {/* Thumbnail */}
      <div className='relative aspect-[1.55/1] overflow-hidden'>
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
          <h3 className='font-poppins text-[16px] sm:text-[17px] font-semibold leading-tight tracking-[-0.02em] text-brand-dark'>
            {title}
          </h3>

          <div className='flex shrink-0 items-center gap-1 font-poppins text-sm'>
            <span className='font-medium text-brand-dark/70'>{rating}</span>
            {/* <span className='text-brand-dark/70 text-xl'>★</span> */}
            <Star fill='#CED0D3' color='#CED0D3' size={17} />
          </div>
        </div>

        <p className='mt-3 font-poppins text-xs text-muted'>
          by <span className='font-medium text-brand-blue'>{creator}</span>
        </p>

        <div className='mt-5 flex items-center gap-3'>
          {/* Level */}
          <span className='flex items-center gap-1.5 rounded-full bg-[#f3f3f3] px-3 py-1.5 font-poppins text-xs font-medium text-brand-dark/70'>
            <ChartNoAxesColumnIncreasing className='h-3.5 w-3.5' />
            Beginner
          </span>

          {/* Students */}
          <div className='flex items-center'>
            <div className='flex -space-x-2'>
              {studentAvatars.map((avatar, index) => (
                <div
                  key={avatar}
                  className='h-7 w-7 overflow-hidden rounded-full border-2 border-white'>
                  <img
                    src={avatar}
                    alt={`Student ${index + 1}`}
                    className='h-full w-full object-cover'
                  />
                </div>
              ))}
            </div>

            {/* Student count */}
            <span className='-ml-2 rounded-full bg-brand-lime px-2 py-2 font-poppins text-[10px] font-semibold text-brand-dark'>
              26+
            </span>
          </div>
        </div>

        <div className='mt-5 border-t border-[#eeeeee] pt-4'>
          <span className='font-poppins text-lg font-semibold text-brand-blue'>
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
