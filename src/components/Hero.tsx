import React from 'react';
import { TurtleMascot } from './TurtleMascot';
import { Award, Users, Sparkles, CheckCircle2, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';
import heroImage from '../assets/images/hero_daycare_playroom_1791746087861.jpg';

import { PageId } from './Navbar';

interface HeroProps {
  onOpenBookingModal: () => void;
  onNavigate?: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onNavigate }) => {
  return (
    <section className="relative pt-4 pb-12 sm:pt-6 sm:pb-16 bg-white overflow-hidden">
      {/* Large transparent icon on the right of page titles starting right top corner */}
      <PageWatermarkIcon icon={Sparkles} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero (Unboxed, Open Layout Directly on White Background) */}
        <div className="relative py-4 sm:py-8 lg:py-10">
          
          {/* Subtle nature lighting shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6F1E8]/70 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EAF2EC]/60 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

          {/* 2-Column Grid with Full-Width Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-10 gap-x-8 lg:gap-x-12 items-start">
            
            {/* Extended Across Page Heading */}
            <div className="lg:col-span-12 z-10">
              <h1 className="font-brand font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] leading-[1.08] text-[#1F3A2C] tracking-tight max-w-5xl w-full">
                Welcome to a <span className="text-[#36684A] relative inline-block">
                  Happy, Safe Place
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#E28448]/40 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span> for Your Little One.
              </h1>
            </div>

            {/* Left Column: Description, CTAs & Value Proposition */}
            <div className="lg:col-span-6 z-10 space-y-6 pt-2 sm:pt-4">
              <p className="text-base sm:text-lg text-[#3E5848] leading-relaxed max-w-xl">
                Providing nurturing, play-based home childcare in{' '}
                <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block transform -rotate-1 shadow-2xs border border-[#FDE68A]">
                  Orléans, Ottawa
                </span>
                . With over 20 years of early childhood experience, an intimate{' '}
                <span className="bg-[#DCFCE7] text-[#166534] px-2.5 py-0.5 rounded-lg font-bold inline-block transform rotate-1 shadow-2xs border border-[#86EFAC]">
                  1:5 ratio
                </span>
                , and{' '}
                <span className="bg-[#FFEDD5] text-[#9A3412] px-2.5 py-0.5 rounded-lg font-bold inline-block shadow-2xs border border-[#FED7AA]">
                  wholesome home-cooked meals
                </span>
                , we give your child a loving home away from home.
              </p>
              <PageSubtitleBanner />

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={onOpenBookingModal}
                  className="px-7 py-3.5 text-base font-bold text-white bg-[#E28448] hover:bg-[#CF7237] active:scale-[0.98] rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate ? onNavigate('programs') : window.location.assign('#programs')}
                  className="px-6 py-3.5 text-base font-semibold text-[#234230] hover:bg-[#FAF7F2] border-2 border-[#D5CABB] rounded-full transition-all duration-200 cursor-pointer"
                >
                  Explore Our Programs
                </button>
              </div>

              {/* Quick Reassurance Bullet Points (Playful Pastel Badges with Organic Shapes) */}
              <div className="pt-4 border-t border-[#E5DCCB] flex flex-wrap gap-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2 bg-[#F0FDF4] border-2 border-[#86EFAC] px-3.5 py-2 rounded-[18px_6px_18px_6px] text-[#166534] shadow-2xs hover:scale-105 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A]" />
                  <span className="font-bold">Max 5 Children in Care</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FFF7ED] border-2 border-[#FED7AA] px-3.5 py-2 rounded-[6px_18px_6px_18px] text-[#9A3412] shadow-2xs hover:scale-105 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
                  <span className="font-bold">CPR-C & ECE Degree</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FEF3C7] border-2 border-[#FDE68A] px-3.5 py-2 rounded-[18px_6px_18px_6px] text-[#92400E] shadow-2xs hover:scale-105 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D97706]" />
                  <span className="font-bold">100% Home Cooked Meals</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Photo Frame with Mascot & Playful Pastel Glow */}
            <div className="lg:col-span-6 relative">
              
              {/* Corner Mascot Badge */}
              <div className="absolute -top-6 -left-6 z-20 hidden sm:block transform -rotate-12 hover:rotate-0 transition-transform">
                <TurtleMascot size={72} variant="waving" className="drop-shadow-md" />
              </div>

              {/* Main Photo Frame (Playful Organic Rounded Shape) */}
              <div className="relative rounded-[36px_18px_36px_18px] sm:rounded-[44px_22px_44px_22px] overflow-hidden shadow-xl aspect-[16/10] sm:aspect-[16/11] border-4 border-[#FFFBEB] ring-4 ring-[#86EFAC]/40">
                <img
                  src={heroImage}
                  alt="Educator and happy children painting and building blocks at Tiny Turtles Home Daycare in Orléans"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Right Floating Mascot */}
              <div className="absolute -bottom-6 -right-5 z-20 hidden sm:block transform rotate-6 hover:rotate-0 transition-transform">
                <TurtleMascot size={76} variant="happy" className="drop-shadow-lg" />
              </div>
            </div>

          </div>
        </div>

        {/* 4-Card Credential & Highlight Bar (Playful Pastel Cards with Organic Shapes) */}
        <div className="mt-8 pt-8 border-t border-[#E5DCCB] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-5 rounded-[28px_12px_28px_12px] bg-[#FFFBEB] border-2 border-[#FDE68A] shadow-xs hover:-translate-y-1 hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-white text-[#D97706] flex items-center justify-center mb-3 shadow-2xs group-hover:scale-110 transition-transform border border-[#FDE68A]">
              <Award className="w-5 h-5 text-[#D97706]" />
            </div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#B45309]">Founded 2004</div>
            <h3 className="font-brand font-bold text-lg text-[#1F3A2C] mt-0.5">
              20+ Years Experience
            </h3>
            <p className="text-xs sm:text-sm text-[#4E6656] mt-1.5 leading-relaxed">
              Started first home daycare in Montreal in 2004; over two decades devoted to nurturing early learners.
            </p>
          </div>

          <div className="p-5 rounded-[12px_28px_12px_28px] bg-[#F0FDF4] border-2 border-[#86EFAC] shadow-xs hover:-translate-y-1 hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-white text-[#166534] flex items-center justify-center mb-3 shadow-2xs group-hover:scale-110 transition-transform border border-[#86EFAC]">
              <ShieldCheck className="w-5 h-5 text-[#16A34A]" />
            </div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#15803D]">Certified & Trained</div>
            <h3 className="font-brand font-bold text-lg text-[#1F3A2C] mt-0.5">
              ECE & Child Psychology
            </h3>
            <p className="text-xs sm:text-sm text-[#4E6656] mt-1.5 leading-relaxed">
              Early Childhood Education degree, Child Psychology background, CPR-C & First Aid certified.
            </p>
          </div>

          <div className="p-5 rounded-[28px_12px_28px_12px] bg-[#F0F9FF] border-2 border-[#7DD3FC] shadow-xs hover:-translate-y-1 hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-white text-[#0369A1] flex items-center justify-center mb-3 shadow-2xs group-hover:scale-110 transition-transform border border-[#7DD3FC]">
              <Users className="w-5 h-5 text-[#0284C7]" />
            </div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#0369A1]">Personal Attention</div>
            <h3 className="font-brand font-bold text-lg text-[#1F3A2C] mt-0.5">
              Small Group Ratio (1:5)
            </h3>
            <p className="text-xs sm:text-sm text-[#4E6656] mt-1.5 leading-relaxed">
              Strictly limited group size guarantees dedicated individual attention, fewer illnesses, and deep bonds.
            </p>
          </div>

          <div className="p-5 rounded-[12px_28px_12px_28px] bg-[#FFF7ED] border-2 border-[#FDBA74] shadow-xs hover:-translate-y-1 hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-white text-[#C2410C] flex items-center justify-center mb-3 shadow-2xs group-hover:scale-110 transition-transform border border-[#FDBA74]">
              <Sparkles className="w-5 h-5 text-[#EA580C]" />
            </div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#C2410C]">Fresh Daily</div>
            <h3 className="font-brand font-bold text-lg text-[#1F3A2C] mt-0.5">
              Wholesome Nutrition
            </h3>
            <p className="text-xs sm:text-sm text-[#4E6656] mt-1.5 leading-relaxed">
              100% home cooked hot meals and fresh organic fruit & vegetable snacks daily in a nut-free kitchen.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
