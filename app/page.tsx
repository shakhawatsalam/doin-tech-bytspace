import Courses from "@/components/home/Courses";
import CreatorCTA from "@/components/home/CreatorCTA";
import Hero from "@/components/home/Hero";
import LearningPaths from "@/components/home/LearningPaths";
import ProfessionalGrowth from "@/components/home/ProfessionalGrowth";
import TrustedBrands from "@/components/home/TrustedBrands";

export default function Home() {
  return (
    <main className='min-h-screen bg-brand-blue'>
      <Hero />
      <TrustedBrands />
      <Courses />
      <LearningPaths />
      <ProfessionalGrowth />
      <CreatorCTA />
    </main>
  );
}
