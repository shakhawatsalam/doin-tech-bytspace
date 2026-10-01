import Image from "next/image";
import Container from "@/components/layout/Container";

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function ProfessionalGrowth() {
  return (
    <section className='relative overflow-hidden bg-[#f7f8fa] py-20 sm:py-24 lg:py-[120px]'>
      {/* Background glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-[180px] top-[-120px] h-[520px] w-[900px] rounded-full bg-brand-lime/25 blur-[90px]'
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute right-[-200px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#dce3ff] blur-[90px]'
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute bottom-[10px] -left-[10%] h-[550px] w-[550px] rounded-full bg-brand-lime/25 blur-[40px]'
      />

      <Container className='relative z-10'>
        <div className='grid items-center gap-16 lg:grid-cols-2 lg:gap-20'>
          {/* Left - Introduction */}
          <div className='max-w-[520px]'>
            <h2 className='font-poppins text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-brand-dark sm:text-4xl'>
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className='mt-7 max-w-[500px] font-sans text-base leading-7 text-[#6f6f6f]'>
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Statistics */}
            <div className='mt-10 flex flex-wrap items-start gap-10'>
              <div>
                <p className='font-poppins text-2xl font-semibold text-brand-blue'>
                  10K
                </p>
                <p className='mt-1 font-poppins text-xs text-[#777777]'>
                  Students
                </p>
              </div>

              <div>
                <p className='font-poppins text-2xl font-semibold text-brand-blue'>
                  70+
                </p>
                <p className='mt-1 font-poppins text-xs text-[#777777]'>
                  Courses
                </p>
              </div>

              <div>
                <p className='font-poppins text-2xl font-semibold text-brand-blue'>
                  16
                </p>
                <p className='mt-1 font-poppins text-xs text-[#777777]'>
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right - Course composition */}
          <div className='relative mx-auto h-[420px] w-full max-w-[560px]'>
            {/* Course card */}
            <Image
              src='/assets/hero/hero-course-card.png'
              alt=''
              width={208}
              height={70}
              className='absolute left-0 top-[30px] z-0 w-[250px] h-[250px] rounded-3xl overflow-clip'
            />

            {/* Person male*/}
            <Image
              src='/assets/hero/hero-person.png'
              alt=''
              width={722}
              height={515}
              className='absolute bottom-[-10px] left-1/2 z-10 w-[540px] max-w-none -translate-x-1/2 '
            />

            {/* Progress card */}
            <Image
              src='/assets/hero/hero-progress-card.png'
              alt=''
              width={232}
              height={131}
              className='absolute right-[5px] top-[150px] z-10 w-[225px] hidden lg:block'
            />

            {/* Decorative lime shape */}
            <Image
              src='/assets/decorative/lime-squiggle-large.svg'
              alt=''
              width={200}
              height={189}
              className='absolute right-[-60px] top-[10px] z-20 w-[200px] h-[200px] hidden lg:block'
            />
          </div>
        </div>

        {/* Bottom row */}
        <div className='lg:mt-24 mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
          {/* Creator composition */}
          <div className='relative mx-auto h-[480px] w-full max-w-[500px]'>
            {/* Lime background */}
            <div
              aria-hidden='true'
              className='absolute bottom-0 left-0 h-[350px] w-[390px] rounded-[40px] bg-gradient-to-t from-brand-lime/80 to-transparent'
            />

            {/* Woman */}
            <Image
              src='/assets/creators/creator-woman.png'
              alt='Creator'
              width={600}
              height={700}
              className='absolute bottom-0 left-1/2 z-10 w-[460px] -translate-x-1/2'
            />

            {/* Revenue card */}
            <Image
              src='/assets/creators/total-revenue-card.png'
              alt=''
              width={190}
              height={90}
              className='absolute left-0 -top-[40px] z-0 w-[190px] hidden lg:block'
            />

            {/* Year-to-date card */}
            <Image
              src='/assets/creators/year-to-date-card.png'
              alt=''
              width={190}
              height={90}
              className='absolute left-0 top-[70px] z-0 w-[120px]'
            />

            {/* Students card */}
            <Image
              src='/assets/creators/happy-students-card.png'
              alt=''
              width={258}
              height={121}
              className='absolute bottom-[50px] right-[-10px] z-20 w-[250px]'
            />

            {/* Decorative squiggle */}
            <Image
              src='/assets/decorative/lime-squiggle-large.svg'
              alt=''
              width={216}
              height={216}
              className='absolute right-[40px] -top-[10px] z-20 w-[216px] rotate-[40deg] hidden lg:block'
            />
          </div>

          {/* Creator content */}
          <div className='max-w-[500px]'>
            <h2 className='font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-brand-dark sm:text-5xl'>
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>

            <p className='mt-7 font-sans text-[15px] leading-7 text-[#6f6f6f]'>
              <strong className='font-semibold text-brand-dark'>
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className='mt-7 space-y-3'>
              {features.map((feature) => (
                <li
                  key={feature}
                  className='flex items-center gap-3 font-poppins text-sm text-brand-dark'>
                  <span className='flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-blue text-[10px] font-bold text-white'>
                    ✓
                  </span>

                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
