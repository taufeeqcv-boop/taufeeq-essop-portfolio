import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

const title = "About | Taufeeq Essop - Financial Recovery Architect";
const description =
  "Rooted in Tradition, Innovating for the Future. Legacy of Tuan Guru and Sayed Abdurrahman Motura. Al-Kimya Origin, Glengrove Lodge, financial and substance recovery.";
const url = `${SITE_CONFIG.siteUrl}/about`;
const ogImage = { url: "/taufeeq-essop-profile.png", width: 1200, height: 630, alt: "Taufeeq Essop - Financial Recovery Architect" };

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url, siteName: "Taufeeq Essop", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-emerald-400 font-semibold uppercase tracking-wider text-sm mb-2">
          Legacy & Leadership
        </p>
        <h1 className="text-4xl font-serif font-bold text-white mb-8">
          Rooted in Tradition, Innovating for the Future
        </h1>

        {/* About Me – main bio */}
        <section className="mb-12">
          <h2 className="text-xl font-serif font-bold text-white mb-6 sr-only">
            About Me
          </h2>
          <div className="prose prose-lg prose-invert max-w-none text-zinc-400">
            <p className="leading-relaxed mb-6 text-zinc-300">
              I am Taufeeq Essop.
            </p>
            <p className="leading-relaxed mb-6">
              My journey as an entrepreneur and counselor is not just a career
              choice; it is a continuation of a legacy. I am a proud descendant
              of the Cape&apos;s spiritual pioneers. Through my maternal
              grandmother, Asia Rakiep, my lineage traces back to Tuan Guru—the
              father of Islam in South Africa who wrote the Qur&apos;an from
              memory while imprisoned on Robben Island. On my paternal side, I
              carry the bloodline of Sayed Abdurrahman Motura, the great saint
              of Robben Island, and the resilient spirit of District Six.
            </p>
            <p className="leading-relaxed mb-6">
              This heritage defines my mission. I combine my Commerce degree and
              ACCSA addiction counseling training with the spiritual discipline
              of my forefathers.
            </p>
            <p className="leading-relaxed mb-10">
              Whether I am developing the Al-Kimya Origin app to digitize
              spiritual healing, welcoming guests to Glengrove Lodge, or guiding
              individuals through financial and substance recovery, my goal
              remains the same: to serve my community with the same dedication
              as those who came before me. I bridge the gap between ancient
              wisdom and modern necessity, helping you build a life of purpose,
              health, and dignity.
            </p>
          </div>
        </section>

        <section className="pt-12 border-t border-zinc-800">
          <h2 className="text-2xl font-serif font-bold text-white mb-6">
            The Intersection of Finance and Human Resilience
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            For over 7 years, I operated in the high-stakes world of corporate
            finance—League of Champions at Sanlam, Grand Prize winner, and
            &ldquo;Best Sales Closer&rdquo; at Old Mutual. I was a
            &ldquo;Retention Architect,&rdquo; helping clients hold onto their
            assets.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Today, I hold a dual-competency profile rare in South Africa: a
            Senior Financial Planner with a BCom in Tax (UWC), and ACCSA
            addiction counseling training. I bridge corporate awards and
            human recovery—whether you are a family funding a loved one&apos;s
            recovery or an executive rebuilding after crisis, I am your
            Financial Recovery Architect.
          </p>
        </section>

        <section className="mt-16 pt-12 border-t border-zinc-800">
          <h2 className="text-2xl font-serif font-bold text-white mb-6">
            Lineage & Heritage
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            My maternal lineage traces to the Rakieps of Bo-Kaap: descendants
            of Tuan Guru (Imam Abdullah ibn Qadi Abdus Salam), Prince of
            Tidore, who founded the Auwal Masjid and preserved knowledge through
            the written word. My paternal lineage carries the Essop-Motura
            heritage from District Six—Sayed Abdurrahman Motura, the Prince of
            Madura, a warrior-saint whose karamat on Robben Island stands as a
            symbol of resilience and spiritual endurance.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            I stand at the convergence of these two lines: the Architect and the
            Survivor—using the discipline of structure and the wisdom of
            endurance to serve families and individuals in their toughest
            transitions.
          </p>
        </section>
      </div>
    </div>
  );
}
