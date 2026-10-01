import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import LearningPathCard from "@/components/home/LearningPathCard";

const learningPaths = [
  {
    image: "/assets/categories/design.svg",
    title: "Design",
  },
  {
    image: "/assets/categories/development.svg",
    title: "Development",
  },
  {
    image: "/assets/categories/it-software.svg",
    title: "IT & Software",
  },
  {
    image: "/assets/categories/business.svg",
    title: "Business",
  },
  {
    image: "/assets/categories/marketing.svg",
    title: "Marketing",
  },
  {
    image: "/assets/categories/photography.svg",
    title: "Photography",
  },
];

export default function LearningPaths() {
  return (
    <section className='bg-white py-16 sm:py-20 lg:py-[80px]'>
      <Container>
        <SectionHeader
          size='small'
          title={<>Explore Diverse Learning Paths at ByteSpace</>}
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className='mt-12 flex flex-wrap justify-center gap-6 lg:gap-8'>
          {learningPaths.map((path) => (
            <LearningPathCard
              key={path.title}
              image={path.image}
              title={path.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
