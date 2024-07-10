import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import FeaturedCourses from '../components/FeaturedCourses/FeaturedCourses'
export default function Home() {
  return (
    <div>
      
      <main className="min-h-screen bg-black bg-opacity-[.96]  antialiased bg-grid-white/[0.02]">
      
       <HeroSection/>
       <FeaturedCourses/>
    </main>
    </div>
  );
}
