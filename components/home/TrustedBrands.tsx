import Image from "next/image";
import Container from "@/components/layout/Container";

const brands = [
  {
    src: "/assets/brand/brand-01.png",
    alt: "Trusted brand",
  },
  {
    src: "/assets/brand/brand-02.png",
    alt: "Trusted brand",
  },
  {
    src: "/assets/brand/brand-03.png",
    alt: "Trusted brand",
  },
  {
    src: "/assets/brand/brand-04.png",
    alt: "Trusted brand",
  },
  {
    src: "/assets/brand/brand-05.png",
    alt: "Trusted brand",
  },
];

export default function TrustedBrands() {
  return (
    <section className='bg-[#f7f7f5] py-14 sm:py-16 lg:py-[72px]'>
      <Container>
        <div className='flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 lg:justify-between lg:gap-x-10'>
          {brands.map((brand, index) => (
            <div
              key={brand.src}
              className='flex h-10 w-[120px] items-center justify-center sm:w-[140px] lg:w-[160px]'>
              <Image
                src={brand.src}
                alt={`${brand.alt} ${index + 1}`}
                width={160}
                height={40}
                className='h-auto max-h-8 w-auto object-contain opacity-45 grayscale'
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
