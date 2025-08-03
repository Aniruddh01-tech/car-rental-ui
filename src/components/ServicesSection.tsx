'use client';
import { useEffect, useState } from "react";
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';
import { palette } from '../styles/palette';

const services = [
  {
    title: "Temple Tours and Pilgrimages",
    desc: "Discover spiritual bliss with AB Ghule Cabs, offering reliable and comfortable rides to sacred temples and pilgrimage destinations.",
    img: "/services/Pilgrimage.jpg"
  },
  {
    title: "Airport Pickup & Drop",
    desc: "Enjoy seamless airport pickup and drop services with AB Ghule Cabs, ensuring timely, comfortable, and hassle-free travel to or from the airport.",
    img: "/services/AirportPickup.jpg"
  },
  {
    title: "Outstation Cab Service",
    desc: "Travel comfortably with AB Ghule Cabs outstation cab service, offering reliable and affordable rides to your favorite destinations.",
    img: "/services/OutstationTaxi.webp"
  },
  {
    title: "Pune Cab Service",
    desc: "Experience reliable and affordable Pune cab services with AB Ghule Cabs, offering comfortable rides for local and outstation travel.",
    img: "/services/PuneCabs.jpeg"
  },
  {
    title: "Best Cab Service in Pune",
    desc: "Ride with AB Ghule Cabs, the best cab service in Pune, offering safe, reliable, and comfortable travel for all your journey needs.",
    img: "/services/Best.jpeg"
  },
  {
    title: "Corporate Cab Service in Pune",
    desc: "AB Ghule Cabs offers professional and reliable corporate cab services in Pune, ensuring timely and comfortable travel for business needs.",
    img: "/services/Corporate.webp"
  },
  {
    title: "Local Cab Service",
    desc: "Looking for a reliable and comfortable cab service for your daily travel needs? AB Ghule Cabs offers top-notch local cab services with well-maintained vehicles and professional drivers to ensure a smooth and hassle-free ride.",
    img: "/services/LocalCabs.jpeg"
  },
  {
    title: "Intercity Cab Service",
    desc: "Planning a trip to another city? Whether it is a business meeting, family vacation, or a quick getaway, AB Ghule Cabs offers safe, comfortable, and affordable intercity cab services. With our experienced drivers and well-maintained vehicles, you can relax and enjoy your journey, no matter the distance.",
    img: "/services/Intercity.webp"
  },
  {
    title: "Cabs for Party & Events",
    desc: "Planning a special event or party? Whether it is a birthday bash, wedding celebration, or a corporate event, AB Ghule Cabs offers reliable and stylish transportation to make your occasion even more memorable. Our fleet of luxurious vehicles and professional drivers ensure you arrive in comfort, on time, and in style.",
    img: "/services/CabParty.jpg"
  },
];

const classicVariants = [
  "animate-classic-fade",
  "animate-classic-fade-delay1",
  "animate-classic-fade-delay2",
  "animate-classic-fade-delay3",
];

const ServicesSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section className="py-12 px-4" style={{ background: palette.bg }}>
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center" style={{ color: palette.primary }}>
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={`relative group rounded-2xl px-0 py-0 transition-all duration-300 cursor-pointer
              shadow-xl hover:scale-105 hover:shadow-2xl
              ${visible ? classicVariants[idx % classicVariants.length] : "opacity-0"}
            `}
            style={{
              background: `linear-gradient(135deg, ${palette.cardBg} 70%, ${palette.bg} 100%)`,
              border: `1px solid ${palette.bg}`,
            }}
          >
            <AspectRatio.Root ratio={16 / 9} className="rounded-t-2xl overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </AspectRatio.Root>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: palette.accent }}>{service.title}</h3>
              <Separator.Root decorative className="h-[2px] mb-3" style={{ background: palette.accent }} />
              <p className="text-sm" style={{ color: palette.highlight }}>{service.desc}</p>
              <span className="absolute bottom-4 right-6 text-xs opacity-0 group-hover:opacity-100 transition" style={{ color: palette.accent }}>Learn More</span>
            </div>
          </div>
        ))}
      </div>
      {/* Classic Animations */}
      <style>{`
        @keyframes classic-fade {
          0% { opacity: 0; transform: scale(0.95) translateY(20px);}
          60% { opacity: 0.7; transform: scale(1.03) translateY(-6px);}
          100% { opacity: 1; transform: scale(1) translateY(0);}
        }
        .animate-classic-fade { animation: classic-fade 0.7s cubic-bezier(.4,0,.2,1) both; }
        .animate-classic-fade-delay1 { animation: classic-fade 0.9s 0.1s cubic-bezier(.4,0,.2,1) both; }
        .animate-classic-fade-delay2 { animation: classic-fade 1.1s 0.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-classic-fade-delay3 { animation: classic-fade 1.3s 0.3s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </section>
  );
};

export default ServicesSection;