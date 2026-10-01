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
    <article className='min-h-[432px] rounded-[14px] bg-white px-4 py-4 sm:px-6 sm:py-6 shadow-sm'>
      <div className='flex flex-col gap-3'>
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className='h-20 w-20 rounded-full object-cover'
        />

        <div>
          <h3 className='font-poppins text-base font-semibold text-brand-dark'>
            {name}
          </h3>

          <p className='mt-1 font-poppins text-base text-brand-blue'>
            {role}
          </p>
        </div>
      </div>

      <p className='mt-5 font-sans text-base leading-[1.80] text-[#666666]'>
        "{quote}"
      </p>
    </article>
  );
}
