import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, Heart, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      parent: 'Sophie & Marc D.',
      neighborhood: 'Avalon, Orléans',
      child: 'Leo (Started at 12 mos, now 3 yrs)',
      text: 'Sending our first baby to daycare was heartbreaking until we met Jane. Her warmth made the transition seamless. Leo talks constantly about the backyard bug hunts and his friend "turtle". The daily photos of him laughing bring us so much comfort at work.',
      rating: 5,
      avatarColor: 'bg-[#D1E7DD] text-[#2D5A40]',
      initials: 'SM',
    },
    {
      parent: 'David K.',
      neighborhood: 'Fallingbrook, Orléans',
      child: 'Maya (2.5 yrs old)',
      text: 'The difference between Tiny Turtles and the large commercial center Maya was at previously is night and day. She is so much calmer, eats second helpings of vegetables (which she never ate at home!), and rarely catches illnesses because the group is so small and clean.',
      rating: 5,
      avatarColor: 'bg-[#FFE6D5] text-[#C05621]',
      initials: 'DK',
    },
    {
      parent: 'Amélie & Jean-François L.',
      neighborhood: 'Chapel Hill, Orléans',
      child: 'Émile (18 mos old)',
      text: 'As a bilingual family, we wanted an environment where French and English were both naturally celebrated. Jane sings French nursery rhymes and reads stories every day. The homemade meals she cooks smell wonderful at pickup time!',
      rating: 5,
      avatarColor: 'bg-[#E2E8F0] text-[#334155]',
      initials: 'AJ',
    },
    {
      parent: 'Jessica T.',
      neighborhood: 'Queenswood Heights, Orléans',
      child: 'Clara (Started at 11 mos, now JK grad)',
      text: 'Clara entered Junior Kindergarten so confident, communicative, and self-sufficient thanks to her foundational years at Tiny Turtles. Jane taught her how to put on her snowsuit independently and resolve peer conflicts with gentle words. A true gem.',
      rating: 5,
      avatarColor: 'bg-[#FDE2E4] text-[#9D4B5C]',
      initials: 'JT',
    },
    {
      parent: 'Rachel & Brandon W.',
      neighborhood: 'Notting Hill, Orléans',
      child: 'Theo (14 mos old)',
      text: 'Jane’s 20+ years of experience is evident in every single detail. Theo has an egg allergy and she takes such meticulous care preparing his fresh meals. He runs to her arms with a huge smile every morning at drop-off.',
      rating: 5,
      avatarColor: 'bg-[#EAF2EC] text-[#2D5A40]',
      initials: 'RB',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="pt-8 pb-16 sm:pt-10 sm:pb-24 bg-white relative overflow-hidden">
      {/* Large transparent icon on the right of page titles starting right top corner */}
      <PageWatermarkIcon icon={Star} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="font-brand font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1F3A2C] tracking-tight leading-[1.12]">
              What Parents Say
            </h2>
            <p className="mt-6 sm:mt-7 text-base text-[#4E6656] max-w-xl leading-relaxed">
              Real stories from Orléans families who found{' '}
              <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#FDE68A] shadow-2xs">
                peace of mind
              </span>
              ,{' '}
              <span className="bg-[#DCFCE7] text-[#166534] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#86EFAC] shadow-2xs">
                loving guidance
              </span>
              , and happiness at Tiny Turtles.
            </p>
            <PageSubtitleBanner />
          </div>

          {/* Autoplay Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFFBEB] border-2 border-[#FDE68A] hover:bg-white text-xs font-bold text-[#1F3A2C] transition-all cursor-pointer shadow-2xs"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Pause Autoscroll</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Play Autoscroll</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#FFFBEB] border-2 border-[#FDE68A] hover:bg-white text-[#1F3A2C] flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 text-[#92400E]" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#FFFBEB] border-2 border-[#FDE68A] hover:bg-white text-[#1F3A2C] flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 text-[#92400E]" />
            </button>
          </div>
        </div>

        {/* Featured Auto-advancing Spotlight Quote (Playful Buttercup Pastel Card with Organic Shapes) */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="p-8 sm:p-10 rounded-[38px_18px_38px_18px] bg-[#FFFBEB] border-3 border-[#FDE68A] shadow-md relative overflow-hidden transition-all mb-12"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-1.5 text-[#EA580C]">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#EA580C]" />
                ))}
                <span className="ml-2 text-xs font-bold text-[#166534] bg-white px-3 py-1 rounded-full border border-[#86EFAC] shadow-2xs">
                  5.0 Verified Review
                </span>
              </div>

              <p className="font-brand text-xl sm:text-2xl lg:text-3xl text-[#1F3A2C] leading-relaxed italic">
                "{reviews[currentIndex].text}"
              </p>

              <div className="pt-4 flex items-center gap-3.5">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base shrink-0 shadow-xs border-2 border-white ${reviews[currentIndex].avatarColor}`}
                >
                  {reviews[currentIndex].initials}
                </div>
                <div>
                  <h4 className="font-brand font-bold text-base text-[#1F3A2C]">
                    {reviews[currentIndex].parent}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#63806F]">
                    <span>{reviews[currentIndex].neighborhood}</span>
                    <span aria-hidden="true">·</span>
                    <span>{reviews[currentIndex].child}</span>
                  </div>
                </div>
              </div>
            </div>

            <Quote className="w-24 h-24 text-[#FDE68A]/80 shrink-0 hidden md:block" />
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 pt-6 mt-6 border-t border-[#FDE68A]">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === i ? 'w-8 bg-[#EA580C]' : 'w-2.5 bg-[#FDE68A]'
                }`}
                aria-label={`Jump to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 3 Review Cards (Playful Pastel Cards with Organic Shapes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((rev, index) => {
            const cardPastels = [
              { bg: 'bg-[#F0FDF4]', border: 'border-[#86EFAC]', shape: 'rounded-[30px_12px_30px_12px]' },
              { bg: 'bg-[#FFF7ED]', border: 'border-[#FED7AA]', shape: 'rounded-[12px_30px_12px_30px]' },
              { bg: 'bg-[#F0F9FF]', border: 'border-[#7DD3FC]', shape: 'rounded-[30px_12px_30px_12px]' },
            ];
            const pTheme = cardPastels[index % cardPastels.length];

            return (
              <div
                key={index}
                className={`p-6 ${pTheme.shape} ${pTheme.bg} border-2 ${pTheme.border} shadow-xs flex flex-col justify-between hover:shadow-lg hover:-translate-y-1.5 transition-all duration-200`}
              >
                <div>
                  <div className="flex items-center gap-1 text-[#EA580C] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EA580C]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#3E5848] leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/5 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs border border-white ${rev.avatarColor}`}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <h5 className="font-brand font-bold text-xs text-[#1F3A2C]">{rev.parent}</h5>
                    <span className="text-[11px] text-[#63806F]">{rev.neighborhood}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Stat Bar (Playful Pastel Stat Tiles) */}
        <div className="mt-14 pt-8 border-t border-[#E5DCCB] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 sm:p-5 rounded-[24px_10px_24px_10px] bg-[#F0FDF4] border-2 border-[#86EFAC] shadow-2xs hover:scale-105 transition-transform">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#166534] font-mono">20+</div>
            <div className="text-xs text-[#166534] font-bold mt-1">Years Experience</div>
          </div>
          <div className="p-4 sm:p-5 rounded-[10px_24px_10px_24px] bg-[#FFFBEB] border-2 border-[#FDE68A] shadow-2xs hover:scale-105 transition-transform">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#D97706] font-mono">100%</div>
            <div className="text-xs text-[#92400E] font-bold mt-1">Scratch Hot Meals</div>
          </div>
          <div className="p-4 sm:p-5 rounded-[24px_10px_24px_10px] bg-[#FFF7ED] border-2 border-[#FED7AA] shadow-2xs hover:scale-105 transition-transform">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#EA580C] font-mono">1:5</div>
            <div className="text-xs text-[#9A3412] font-bold mt-1">Low Carer Ratio</div>
          </div>
          <div className="p-4 sm:p-5 rounded-[10px_24px_10px_24px] bg-[#FAF5FF] border-2 border-[#DDD6FE] shadow-2xs hover:scale-105 transition-transform">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED] font-mono">5.0 ★</div>
            <div className="text-xs text-[#6D28D9] font-bold mt-1">Parent Feedback</div>
          </div>
        </div>

      </div>
    </section>
  );
};
