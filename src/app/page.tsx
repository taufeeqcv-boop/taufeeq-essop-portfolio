"use client";

import { SITE_CONFIG, type VentureWithMedia } from "@/lib/config";
import { getIcon } from "@/lib/icons";
import BentoCard from "@/components/bento/BentoCard";
import HeroCard from "@/components/bento/HeroCard";
import CrisisCard from "@/components/bento/CrisisCard";
import AccoladesCard from "@/components/bento/AccoladesCard";

export default function HomePage() {
  const ventures = SITE_CONFIG.ventures;
  const crisisVenture = ventures.find((v) => "featured" in v && v.featured) ?? ventures[0];
  const otherVentures = ventures.filter((v) => v.id !== crisisVenture.id);

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 max-w-7xl mx-auto overflow-x-hidden grid-lines page-vignette relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 relative z-10">
        {/* Hero: Top-Left, spans 2 cols, 2 rows */}
        <div className="order-1 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1">
          <HeroCard />
        </div>

        {/* Crisis Interceptor: Top-Right (1 col, 1 row) */}
        <div className="order-2 lg:col-start-3 lg:row-start-1">
          <CrisisCard />
        </div>

        {/* Al-Kimya: Top-Far-Right (1 col, 1 row) */}
        {otherVentures[0] && (
          <div className="order-3 lg:col-start-4 lg:row-start-1">
            <BentoCard
              title={otherVentures[0].name}
              description={otherVentures[0].description}
              icon={getIcon(otherVentures[0].icon)}
              href={otherVentures[0].link}
              color={otherVentures[0].color}
              index={0}
              logo={(otherVentures[0] as VentureWithMedia).logo}
              website={(otherVentures[0] as VentureWithMedia).website}
            />
          </div>
        )}

        {/* Precision LGS: Below Crisis (1 col, 1 row) */}
        {otherVentures[1] && (
          <div className="order-4 lg:col-start-3 lg:row-start-2">
            <BentoCard
              title={otherVentures[1].name}
              description={otherVentures[1].description}
              icon={getIcon(otherVentures[1].icon)}
              href={otherVentures[1].link}
              color={otherVentures[1].color}
              index={1}
              logo={(otherVentures[1] as VentureWithMedia).logo}
              website={(otherVentures[1] as VentureWithMedia).website}
            />
          </div>
        )}

        {/* Glengrove: Below Al-Kimya (1 col, 1 row) */}
        {otherVentures[2] && (
          <div className="order-5 lg:col-start-4 lg:row-start-2">
            <BentoCard
              title={otherVentures[2].name}
              description={otherVentures[2].description}
              icon={getIcon(otherVentures[2].icon)}
              href={otherVentures[2].link}
              color={otherVentures[2].color}
              index={2}
              logo={(otherVentures[2] as VentureWithMedia).logo}
              website={(otherVentures[2] as VentureWithMedia).website}
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
