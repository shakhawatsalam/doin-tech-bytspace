import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CategoryFilters from "@/components/home/CategoryFilters";
import CourseCard from "@/components/home/CourseCard";

const courses = [
  {
    image: "/assets/courses/figma-basics.png",
    title: "Learn Figma from Basic",
  },
  {
    image: "/assets/courses/digital-assets.png",
    title: "Build Digital Asset",
  },
  {
    image: "/assets/courses/big-data.png",
    title: "The Power of Big Data",
  },
  {
    image: "/assets/courses/productivity.png",
    title: "Balancing Productivity and Life",
  },
  {
    image: "/assets/courses/money-management.png",
    title: "Mastering Money Management",
  },
  {
    image: "/assets/courses/startup.png",
    title: "From Idea to Startup Success",
  },
];

export default function Courses() {
  return (
    <section id='courses' className='bg-white py-20 sm:py-24 lg:py-[50px]'>
      <Container>
        <SectionHeader
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          description='At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.'
        />

        <CategoryFilters />

        <div className='mx-auto mt-16 grid max-w-[1180px] gap-x-7 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
          {courses.map((course) => (
            <CourseCard
              key={course.image}
              image={course.image}
              title={course.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
