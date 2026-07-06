import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MusicGrid from "@/components/music-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MusicGrid />
      <Footer />
    </main>
  );
}
