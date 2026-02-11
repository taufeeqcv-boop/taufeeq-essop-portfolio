"use client";

import { SITE_CONFIG, type VentureWithMedia } from "@/lib/config";
import { getIcon } from "@/lib/icons";
import BentoCard from "@/components/bento/BentoCard";
import HeroCard from "@/components/bento/HeroCard";
import AccoladesCard from "@/components/bento/AccoladesCard";

const BENTO_ORDER: (typeof SITE_CONFIG.ventures)[number]["id"][] = ["alkimya", "precision", "crisis", "glengrove"];

export default function HomePage() {
  const ventures = SITE_CONFIG.ventures;
  const bentoVentures = BENTO_ORDER.map((id) => ventures.find((v) => v.id === id)).filter(Boolean);

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 max-w-7xl mx-auto overflow-x-hidden grid-lines page-vignette relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 relative z-10">
        {/* Hero: Top-Left, spans 2 cols, 2 rows */}
        <div className="order-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1">
          <HeroCard />
        </div>

        {/* Al-Kimya: Top-Right */}
        {bentoVentures[0] && (
          <div className="order-2 lg:col-start-3 lg:row-start-1 min-h-[220px] flex flex-col">
            <BentoCard
              title={bentoVentures[0].name}
              description={bentoVentures[0].description}
              icon={getIcon(bentoVentures[0].icon)}
              href={bentoVentures[0].link}
              color={bentoVentures[0].color}
              index={0}
              logo={(bentoVentures[0] as VentureWithMedia).logo}
              website={(bentoVentures[0] as VentureWithMedia).website}
            />
          </div>
        )}

        {/* Precision LGS: Top-Far-Right */}
        {bentoVentures[1] && (
          <div className="order-3 lg:col-start-4 lg:row-start-1 min-h-[220px] flex flex-col">
            <BentoCard
              title={bentoVentures[1].name}
              description={bentoVentures[1].description}
              icon={getIcon(bentoVentures[1].icon)}
              href={bentoVentures[1].link}
              color={bentoVentures[1].color}
              index={1}
              logo={(bentoVentures[1] as VentureWithMedia).logo}
              website={(bentoVentures[1] as VentureWithMedia).website}
            />
          </div>
        )}

        {/* Crisis Interceptor: Bottom-Left of right column */}
        {bentoVentures[2] && (
          <div className="order-4 lg:col-start-3 lg:row-start-2 min-h-[220px] flex flex-col">
            <BentoCard
              title={bentoVentures[2].name}
              description={bentoVentures[2].description}
              icon={getIcon(bentoVentures[2].icon)}
              href={bentoVentures[2].link}
              color={bentoVentures[2].color}
              index={2}
              logo={(bentoVentures[2] as VentureWithMedia).logo}
              website={(bentoVentures[2] as VentureWithMedia).website}
            />
          </div>
        )}

        {/* Glengrove: Bottom-Right */}
        {bentoVentures[3] && (
          <div className="order-5 lg:col-start-4 lg:row-start-2 min-h-[220px] flex flex-col">
            <BentoCard
              title={bentoVentures[3].name}
              description={bentoVentures[3].description}
              icon={getIcon(bentoVentures[3].icon)}
              href={bentoVentures[3].link}
              color={bentoVentures[3].color}
              index={3}
              logo={(bentoVentures[3] as VentureWithMedia).logo}
              website={(bentoVentures[3] as VentureWithMedia).website}
            />
          </div>
        )}

        {/* Accolades: Bottom row, spans 2 cols */}
        <div className="order-6 lg:col-start-1 lg:col-span-2 lg:row-start-3">
          <AccoladesCard />
        </div>
      </div>
    </main>
  );
}
