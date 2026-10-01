import Image from "next/image";

interface LearningPathCardProps {
  image: string;
  title: string;
}

export default function LearningPathCard({
  image,
  title,
}: LearningPathCardProps) {
  return (
    <article className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-[18px] border border-[#d9d9d9] bg-white'>
      <div className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand-lime'>
        <Image
          src={image}
          alt=''
          width={60}
          height={60}
          className='h-[60px] w-[60px] object-contain'
        />
      </div>

      <h3 className='mt-4 font-sans text-base font-medium text-brand-dark'>
        {title}
      </h3>
    </article>
  );
}
