import HeroSection from "@/components/sections/HeroSection";
import ConceptSection from "@/components/sections/ConceptSection";
import CoursesSection from "@/components/sections/CoursesSection";
import SpaceSection from "@/components/sections/SpaceSection";
import EventsSection from "@/components/sections/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SubscribeSection from "@/components/sections/SubscribeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <CoursesSection />
      <SpaceSection />
      <EventsSection />
      <TestimonialsSection />
      <SubscribeSection />
    </>
  );
}