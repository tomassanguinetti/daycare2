import React, { useState, useRef, useEffect } from 'react';
import { Eye, X, ZoomIn, ShieldCheck, Sparkles, MapPin, Compass } from 'lucide-react';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';
import playroomImg from '../assets/images/hero_daycare_playroom_1791746087861.jpg';
import outdoorImg from '../assets/images/daycare_outdoor_backyard_1791746098373.jpg';
import readingNookImg from '../assets/images/daycare_cozy_reading_nook_1791746107763.jpg';
import lunchImg from '../assets/images/daycare_healthy_lunch_1791746117231.jpg';
import artCraftsImg from '../assets/images/daycare_art_sensory_table_1791896408598.jpg';
import napRoomImg from '../assets/images/daycare_peaceful_nap_nursery_1791896408869.jpg';

export const VirtualTour: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<{
    url: string;
    title: string;
    description: string;
    highlights: string[];
    tag: string;
  } | null>(null);

  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const spaces = [
    {
      id: 'playroom',
      title: 'Bright Main Playroom',
      subtitle: 'Natural wood furniture & low accessible toy shelves',
      image: playroomImg,
      category: 'Indoor Learning',
      description:
        'Our main playroom is thoughtfully arranged with open-ended natural materials. Low wooden shelves empower children to choose activities independently, building autonomy, curiosity, and pride in tidying up.',
      highlights: [
        'Non-toxic wooden blocks & sensory puzzles',
        'Montessori-inspired self-directed activity tables',
        'Abundant natural sunlight from large garden-facing windows',
      ],
    },
    {
      id: 'backyard',
      title: 'Secure Fenced Backyard',
      subtitle: 'Natural grass, sensory sand-and-water tables & playhouse',
      image: outdoorImg,
      category: 'Outdoor Discovery',
      description:
        'Children spend at least 2 hours outdoors each day. Our private, double-gated 6-foot fenced backyard features soft natural lawn, vegetable planter boxes, a cedar sensory water & sand table, and stroller walk access.',
      highlights: [
        'Double-latched child safety privacy fence',
        'Sensory cedar water & kinetic sand table',
        'Seasonal mini vegetable and herb garden',
      ],
    },
    {
      id: 'art-crafts',
      title: 'Art & Sensory Exploration Table',
      subtitle: 'Non-toxic finger paints, tactile trays & drying racks',
      image: artCraftsImg,
      category: 'Creative Arts',
      description:
        'A dedicated creative zone where toddlers experiment with colors, paper collages, wooden stamping, playdough, and sensory bins (kinetic sand, leaves, rice) designed to develop fine-motor dexterity and joy.',
      highlights: [
        '100% washable non-toxic paints and stamping kits',
        'Tactile sensory exploration bins rotated weekly',
        'Display board for toddler masterpieces to share with parents',
      ],
    },
    {
      id: 'reading',
      title: 'Cozy Reading Nook & Rest Corner',
      subtitle: 'Fluffy cushions, curated picture books & soft textures',
      image: readingNookImg,
      category: 'Quiet Nook',
      description:
        'A tranquil, calming corner where children cuddle up with picture books, listen to French and English stories, or take a peaceful quiet break when overwhelmed or transitioning between activities.',
      highlights: [
        'Bilingual French & English early reader collection',
        'Washable natural cotton floor cushions & soft wool rug',
        'Calming sensory lighting & gentle acoustic environment',
      ],
    },
    {
      id: 'nap-room',
      title: 'Peaceful Rest & Nap Nursery',
      subtitle: 'Low individual wooden cots, white noise & soft lullabies',
      image: napRoomImg,
      category: 'Rest & Nap',
      description:
        'Rest is vital for growing bodies and minds. Our separate dim sleep room has individual sanitized wooden cots with cozy blankets from home, soft lullabies, and soothing back-rubs from Jane.',
      highlights: [
        'Individual sanitized low cots with personal linens',
        'Soothing white noise and temperature-regulated dim room',
        'Gentle unhurried wake-up and gradual afternoon transition',
      ],
    },
    {
      id: 'kitchen',
      title: 'Family Dining & Meal Area',
      subtitle: 'Family-style seating, bamboo dishes & fresh meals',
      image: lunchImg,
      category: 'Wholesome Nutrition',
      description:
        'Mealtime is a communal celebration of healthy eating and conversation. Children sit together at our child-sized wooden dining table learning to pour water, pass dishes, and explore colorful vegetables.',
      highlights: [
        'Child-height ergonomic wooden chairs and tables',
        'BPA-free bamboo divided plates & child-safe flatware',
        'Strict sanitation protocol before and after every meal',
      ],
    },
  ];

  // Auto-scroll loop with smooth animation frame
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.8; // pixels per frame

    const step = () => {
      if (isAutoScrolling && container) {
        container.scrollLeft += speed;
        // When reaching halfway through the doubled content, smoothly loop back to 0
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrolling]);

  // Duplicate items for seamless continuous auto-scrolling
  const doubledSpaces = [...spaces, ...spaces];

  return (
    <section id="spaces" className="pt-8 pb-16 sm:pt-10 sm:pb-24 bg-white relative overflow-hidden">
      {/* Large transparent icon on the right of page titles starting right top corner */}
      <PageWatermarkIcon icon={Compass} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-brand font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1F3A2C] tracking-tight leading-[1.12]">
              Our Spaces & Environment
            </h2>
            <p className="mt-6 sm:mt-7 text-base text-[#4E6656] max-w-2xl leading-relaxed">
              Every square foot is thoughtfully{' '}
              <span className="bg-[#DCFCE7] text-[#166534] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#86EFAC] shadow-2xs">
                child-proofed
              </span>
              ,{' '}
              <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#FDE68A] shadow-2xs">
                sanitized daily
              </span>
              , and filled with natural light to create an inviting, unhurried second home in Orléans.
            </p>
            <PageSubtitleBanner />
          </div>
        </div>

        {/* Continuous Auto-Scrolling Reel (Playful Pastel Cards) */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-1 select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {doubledSpaces.map((space, index) => {
            const spacePastels = [
              { bg: 'bg-[#FFFBEB]', border: 'border-[#FDE68A]', shape: 'rounded-[32px_14px_32px_14px]' },
              { bg: 'bg-[#F0FDF4]', border: 'border-[#86EFAC]', shape: 'rounded-[14px_32px_14px_32px]' },
              { bg: 'bg-[#F0F9FF]', border: 'border-[#7DD3FC]', shape: 'rounded-[32px_14px_32px_14px]' },
              { bg: 'bg-[#FFF7ED]', border: 'border-[#FED7AA]', shape: 'rounded-[14px_32px_14px_32px]' },
              { bg: 'bg-[#FAF5FF]', border: 'border-[#DDD6FE]', shape: 'rounded-[32px_14px_32px_14px]' },
            ];
            const pTheme = spacePastels[index % spacePastels.length];

            return (
              <div
                key={`${space.id}-${index}`}
                onClick={() =>
                  setActiveModalImage({
                    url: space.image,
                    title: space.title,
                    description: space.description,
                    highlights: space.highlights,
                    tag: space.category,
                  })
                }
                className={`w-80 sm:w-96 shrink-0 p-4 ${pTheme.shape} ${pTheme.bg} border-2 ${pTheme.border} transition-all group cursor-pointer flex flex-col hover:-translate-y-1.5 hover:shadow-lg shadow-xs`}
              >
                <div className="relative aspect-[16/11] rounded-[24px_10px_24px_10px] overflow-hidden shadow-2xs">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-2xs">
                    {space.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-[#1F3A2C] px-3.5 py-1.5 rounded-xl shadow-md border border-[#E5DCCB] opacity-90 group-hover:opacity-100 flex items-center gap-1.5 text-xs font-bold transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>View Space</span>
                  </div>
                </div>

                <div className="pt-3.5 px-1 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-brand font-bold text-lg text-[#1F3A2C] group-hover:text-[#2D5A40] transition-colors">
                      {space.title}
                    </h3>
                    <p className="text-xs font-bold text-[#EA580C] mt-0.5">
                      {space.subtitle}
                    </p>
                    <p className="mt-2 text-xs text-[#4E6656] leading-relaxed line-clamp-2">
                      {space.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Safety & Tour Banner (Playful Mint Pastel Card) */}
        <div className="mt-14 p-6 sm:p-7 rounded-[36px_16px_36px_16px] bg-[#F0FDF4] border-3 border-[#86EFAC] shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#166534] shadow-2xs flex items-center justify-center shrink-0 border border-black/5">
              <ShieldCheck className="w-6 h-6 text-[#16A34A]" />
            </div>
            <div>
              <h4 className="font-brand font-bold text-base sm:text-lg text-[#1F3A2C]">
                Rigorous Health & Safety Standards
              </h4>
              <p className="text-xs sm:text-sm text-[#4E6656] mt-0.5">
                Double-gated staircases, non-toxic organic cleaning solutions, hospital-grade air purification, and 100% smoke-free premises.
              </p>
            </div>
          </div>
          <a
            href="#inquire"
            className="whitespace-nowrap px-7 py-3 rounded-full bg-[#E28448] hover:bg-[#CF7237] text-xs sm:text-sm font-bold text-white shadow-md hover:scale-105 transition-all"
          >
            Book In-Person Tour →
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#E5DCCB] relative">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-black">
              <img
                src={activeModalImage.url}
                alt={activeModalImage.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-[#E28448] bg-[#FAF7F2] px-3 py-0.5 rounded-full border border-[#E5DCCB]">
                  {activeModalImage.tag}
                </span>
                <span className="text-xs text-[#5D7A68]">Tiny Turtles Facility · Orléans, ON</span>
              </div>
              <h3 className="font-brand font-bold text-2xl text-[#1F3A2C]">
                {activeModalImage.title}
              </h3>
              <p className="mt-2 text-sm text-[#4E6656] leading-relaxed">
                {activeModalImage.description}
              </p>
              <div className="mt-4 pt-4 border-t border-[#E5DCCB] flex flex-wrap gap-3 text-xs font-medium text-[#2E5A44]">
                {activeModalImage.highlights.map((h, i) => (
                  <span key={i} className="flex items-center gap-1.5 bg-[#EAF2EC] px-3 py-1 rounded-full">
                    <Sparkles className="w-3.5 h-3.5 text-[#E28448]" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
