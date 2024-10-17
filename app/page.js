import HeroSection from "@/components/HeroSection";
import MainCategories from "@/components/MainCategories";
import ProductGrid from "@/components/ProductGrid";
import RoomInspiration from "@/components/RoomInspiration";
import SlidingImages from "@/components/SlidingImages";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MainCategories />
      <ProductGrid />
      <RoomInspiration />
    </div>
  );
}
