import Image from "next/image";

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({
  image,
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <article className='rounded-[20px] border border-[#e7e7e7] bg-white p-6 sm:p-7'>
      <div className='flex items-center gap-4'>
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className='h-14 w-14 rounded-full object-cover'
        />

        <div>
          <h3 className='font-poppins text-sm font-semibold text-brand-dark'>
            {name}
          </h3>

          <p className='mt-1 font-poppins text-xs text-[#888888]'>{role}</p>
        </div>
      </div>

      <div className='mt-6 flex gap-1 text-brand-lime'>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      <p className='mt-5 font-sans text-[15px] leading-7 text-[#666666]'>
        “{quote}”
      </p>
    </article>
  );
}
