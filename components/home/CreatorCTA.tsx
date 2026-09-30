import Image from "next/image";
import Container from "@/components/layout/Container";

export default function CreatorCTA() {
  return (
    <section className='relative min-h-[560px] overflow-hidden bg-brand-blue'>
      {/* Grid */}
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

      {/* Left lime shape */}
      <Image
        src='/assets/decorative/lime-cone.png'
        alt=''
        width={190}
        height={189}
        aria-hidden='true'
        className='absolute left-[-45px] top-[70px] z-[1] hidden w-[170px] md:block'
      />

      {/* Top-right white cone */}
      <Image
        src='/assets/decorative/white-cone.png'
        alt=''
        width={140}
        height={190}
        aria-hidden='true'
        className='absolute right-[7%] top-[-20px] z-[1] hidden w-[120px] lg:block'
      />

      {/* Left white squiggle */}
      <Image
        src='/assets/decorative/white-squiggle-small.png'
        alt=''
        width={177}
        height={176}
        aria-hidden='true'
        className='absolute bottom-[80px] left-[12%] z-[1] hidden w-[130px] lg:block'
      />

      {/* Right lime shape */}
      <Image
        src='/assets/decorative/lime-cone.png'
        alt=''
        width={190}
        height={189}
        aria-hidden='true'
        className='absolute bottom-[40px] right-[-30px] z-[1] hidden w-[180px] lg:block'
      />

      {/* Right white squiggle */}
      <Image
        src='/assets/decorative/white-squiggle-large.png'
        alt=''
        width={317}
        height={332}
        aria-hidden='true'
        className='absolute bottom-[-20px] right-[7%] z-[1] hidden w-[150px] lg:block'
      />

      <Container className='relative z-10 flex min-h-[560px] items-center justify-center'>
        <div className='mx-auto max-w-[760px] text-center'>
          <p className='font-poppins text-sm font-medium text-brand-lime'>
            For Creators
          </p>

          <h2 className='mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[64px]'>
            Unlock Your Potential
            <br />
            as a Creator with ByteSpace
          </h2>

          <p className='mx-auto mt-7 max-w-[620px] font-sans text-base leading-7 text-white/75 sm:text-lg'>
            Share your knowledge, build your audience, and turn your expertise
            into meaningful opportunities with ByteSpace.
          </p>

          <div className='mt-9'>
            <button
              type='button'
              className='rounded-full bg-brand-lime px-8 py-4 font-poppins text-sm font-semibold text-brand-dark transition-transform duration-200 hover:scale-[1.03]'>
              Join as Creator
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
