import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import LearningPathCard from "@/components/home/LearningPathCard";

const learningPaths = [
  {
    image: "/assets/categories/design.png",
    title: "Design",
  },
  {
    image: "/assets/categories/development.png",
    title: "Development",
  },
  {
    image: "/assets/categories/it-software.png",
    title: "IT & Software",
  },
  {
    image: "/assets/categories/business.png",
    title: "Business",
  },
  {
    image: "/assets/categories/marketing.png",
    title: "Marketing",
  },
  {
    image: "/assets/categories/photography.png",
    title: "Photography",
  },
];

export default function LearningPaths() {
  return (
    <section className='bg-white py-24 sm:py-28 lg:py-[120px]'>
      <Container>
        <SectionHeader
          size='small'
          title={<>Explore Diverse Learning Paths at ByteSpace</>}
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className='mt-16 flex flex-wrap justify-center gap-6 lg:gap-8'>
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
