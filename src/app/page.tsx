import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedVideos } from "@/components/FeaturedVideos";
import {
  CoreValue,
  Process,
  ManagementScope,
  SimpleDeal,
  FreeDemo,
  SocialProof,
  SafetyLogic,
  FAQ,
  FinalCTA
} from "@/components/Placeholders";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CoreValue />
      <FeaturedVideos />
      <SafetyLogic />
      <Process />
      <ManagementScope />
      <SimpleDeal />
      <FreeDemo />
      <SocialProof />
      <FAQ />

      <FinalCTA />
      <Footer />
    </main>
  );
}
