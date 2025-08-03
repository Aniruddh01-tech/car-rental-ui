import HeroSection from '../components/HeroSection';
import PlacesSection from '../components/PlacesSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="bg-[#f6f8fa] min-h-screen">
      <HeroSection />
      <PlacesSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}