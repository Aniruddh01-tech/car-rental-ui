/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from "react";
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';
import { palette } from '../styles/palette';

const places = [
  {
    name: "Gateway of India",
    desc: "A grand monument by the Arabian Sea, the Gateway of India is an iconic landmark symbolizing Mumbai's rich history and architecture.",
    img: "/places/GatewayOfIndia.jpg"
  },
  {
    name: "Marine Drive",
    desc: "Known as the Queen's Necklace, Marine Drive is a picturesque promenade offering stunning views of the coastline.",
    img: "/places/MarineDrive.jpg"
  },
  {
    name: "Chhatrapati Shivaji Maharaj Terminus (CST)",
    desc: "A UNESCO World Heritage Site, CST is a historic railway station combining Victorian Gothic and Indian architectural styles.",
    img: "/places/CST.jpg"
    },
  {
    name: "Elephanta Caves",
    desc: "Located on Elephanta Island, these UNESCO World Heritage Site caves are renowned for ancient rock-cut temples and sculptures.",
    img: "/places/ElephantaCaves.jpg"
  },
  {
    name: "Juhu Beach",
    desc: "A lively destination famous for street food stalls, relaxation, and recreation along the coast.",
    img: "/places/JuhuBeach.jpg"
  },
  {
    name: "Siddhivinayak Temple",
    desc: "One of the most revered temples in Mumbai, dedicated to Lord Ganesha.",
    img: "/places/Shree_Siddhivinayak_Temple_Mumbai.jpg"
  },
  {
    name: "Haji Ali Dargah",
    desc: "An iconic mosque and shrine situated on a small islet in the Arabian Sea.",
    img: "/places/HajiAliDargah.jpg"
  },
  {
    name: "Bandra-Worli Sea Link",
    desc: "A cable-stayed bridge offering breathtaking views of the Mumbai skyline and coastline.",
    img: "/places/Bandra-WorliSeaLink.jpg"
  },
  {
    name: "Colaba Causeway",
    desc: "A vibrant street in South Mumbai, renowned for its shops, street vendors, and iconic cafes.",
    img: "/places/ColabaCauseway.jpg"
  },
];

const classicVariants = [
  "animate-classic-fade",
  "animate-classic-fade-delay1",
  "animate-classic-fade-delay2",
  "animate-classic-fade-delay3",
];

const PlacesSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section className="py-12 px-4 bg-white overflow-x-hidden"
      style={{ 
        background: palette.bg,
        color: palette.text 
      }}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-[#26393b] mb-8 text-center">
        Top Places to Visit in Mumbai
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {places.map((place, idx) => (
          <div
            key={place.name}
            className={`relative group rounded-2xl px-0 py-0 transition-all duration-300 cursor-pointer
              bg-gradient-to-br from-[#26393b] to-[#4e6e73] text-white shadow-xl
              hover:scale-105 hover:shadow-2xl
              ${visible ? classicVariants[idx % classicVariants.length] : "opacity-0"}
            `}
            style={{
              background: `linear-gradient(135deg, ${palette.cardBg} 70%, ${palette.bg} 100%)`,
            }}
          >
            <AspectRatio.Root ratio={16 / 9} className="rounded-t-2xl overflow-hidden">
              <img
                src={place.img}
                alt={place.name}
                className="object-cover w-full h-full"
              />
            </AspectRatio.Root>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-[#ffd600]">{place.name}</h3>
              <Separator.Root decorative className="h-[2px] bg-[#ffd600] mb-3" />
              <p className="text-black text-sm">{place.desc}</p>
              <span className="absolute bottom-4 right-6 text-xs opacity-0 group-hover:opacity-100 transition text-[#ffd600]">Explore</span>
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

export default PlacesSection;