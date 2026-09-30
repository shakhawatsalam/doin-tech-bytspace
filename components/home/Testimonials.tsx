import Image from "next/image";
import Container from "@/components/layout/Container";
import TestimonialCard from "@/components/home/TestimonialCard";

const testimonials = [
  {
    image: "/assets/testimonials/sarah-m.png",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    image: "/assets/testimonials/james-l.png",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "The user-friendly interface and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    image: "/assets/testimonials/alex-b.png",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-[#f9fbff] via-white to-[#eaff74] py-16 sm:py-20 lg:py-[72px]'>
      {/* Decorative top elements */}
      <div
        aria-hidden='true'
        className='absolute left-[3%] top-0 h-[8px] w-[130px] bg-brand-blue'
      />

      <div
        aria-hidden='true'
        className='absolute right-[10%] top-0 h-[70px] w-[90px] rounded-b-[30px] bg-brand-lime'
      />

      <Container className='relative z-10'>
        {/* Header */}
        <div className='grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16'>
          <div>
            <h2 className='max-w-[500px] font-display text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-brand-dark sm:text-[38px]'>
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div className='lg:pt-1'>
            <p className='max-w-[500px] font-sans text-[13px] leading-[1.7] text-[#666666]'>
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className='mx-auto mt-10 grid max-w-[1080px] gap-5 md:grid-cols-3'>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
