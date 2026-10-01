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
    <article className='min-h-[225px] rounded-[14px] bg-white px-4 py-4 sm:px-6 sm:py-6'>
      <div className='flex items-center gap-3'>
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className='h-12 w-12 rounded-full object-cover'
        />

        <div>
          <h3 className='font-poppins text-[13px] font-semibold text-brand-dark'>
            {name}
          </h3>

          <p className='mt-1 font-poppins text-[10px] font-medium text-brand-blue'>
            {role}
          </p>
        </div>
      </div>

      <p className='mt-5 font-sans text-[11px] leading-[1.65] text-[#666666]'>
        "{quote}"
      </p>
    </article>
  );
}
