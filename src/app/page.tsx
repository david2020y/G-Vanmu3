import HeroSection from "@/components/sections/HeroSection";
import ConceptSection from "@/components/sections/ConceptSection";
// 暂时注释掉找不到的组件导入
// 暂时注释掉 CoursesSection 导入，因为该组件文件不存在
// import CoursesSection from "@/components/sections/CoursesSection";
import SpaceSection from "@/components/sections/SpaceSection";
import EventsSection from "@/components/sections/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SubscribeSection from "@/components/sections/SubscribeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      {/* 暂时注释掉 CoursesSection 组件，因为找不到该组件 */}
      {/* <CoursesSection /> */}
      <SpaceSection />
      <EventsSection />
      <TestimonialsSection />
      <SubscribeSection />
    </>
  );
}