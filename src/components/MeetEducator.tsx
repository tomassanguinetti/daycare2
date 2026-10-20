import React from 'react';
import { TurtleMascot } from './TurtleMascot';
import { Award, ShieldCheck, Heart, Sparkles, BookOpen, Clock, CheckCircle2, UserCheck } from 'lucide-react';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';

import { PageId } from './Navbar';

interface MeetEducatorProps {
  onOpenBookingModal: () => void;
  onNavigate?: (page: PageId) => void;
}

export const MeetEducator: React.FC<MeetEducatorProps> = ({ onOpenBookingModal, onNavigate }) => {
  return (
    <section id="about" className="pt-6 pb-16 sm:pt-8 sm:pb-24 bg-white relative overflow-hidden">
      {/* Large transparent icon on the right of page titles starting right top corner */}
      <PageWatermarkIcon icon={Heart} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main About (Unboxed, Open Editorial Layout Directly on White Background) */}
        <div className="py-2 sm:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative mx-auto max-w-sm">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-[#EAF2EC] border border-[#E5DCCB]">
                  <img
                    src="/src/assets/images/daycare_owner_portrait_1792079652349.jpg"
                    alt="Jane Doe, early childhood educator and owner of Tiny Turtles Home Daycare"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark gradient overlay for bottom text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Corner Mascot Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-sm p-1.5 rounded-2xl shadow-sm border border-white/60">
                    <TurtleMascot size={32} variant="waving" />
                  </div>

                  {/* Provider Info Bottom Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10">
                    <h4 className="font-brand font-bold text-2xl text-white">Jane Doe</h4>
                    <p className="text-xs text-[#E1F3E6] font-medium mt-0.5">
                      ECE Degree · Child Psychology Studies
                    </p>
                    <p className="text-xs text-white/90 mt-2 leading-relaxed italic">
                      "Every child blooms at their own pace when nurtured with patience, kindness, and wonder."
                    </p>
                    <div className="mt-3 inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[11px] font-semibold border border-white/30">
                      Childcare Provider Since 2004
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-2xl shadow-md border border-[#E5DCCB] flex items-center gap-2 z-20">
                  <div className="w-3 h-3 rounded-full bg-[#4E8C5E]" />
                  <span className="text-xs font-bold text-[#1F3A2C]">Police VSC Cleared</span>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & The "ABC" Daycare Approach (Unboxed) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="font-brand font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] text-[#1F3A2C] tracking-tight leading-[1.1]">
                  A Gentle, Structured Home for Your Little One
                </h1>
                <p className="mt-6 sm:mt-7 text-base sm:text-lg text-[#4E6656] leading-relaxed">
                  Over 20 years of early childhood care fostering{' '}
                  <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#FDE68A] shadow-2xs">
                    joyful, play-based learning
                  </span>{' '}
                  and{' '}
                  <span className="bg-[#DCFCE7] text-[#166534] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#86EFAC] shadow-2xs">
                    emotional security
                  </span>{' '}
                  in Orléans.
                </p>
                <PageSubtitleBanner />
              </div>

              <div className="prose text-[#455F4F] space-y-3.5 text-base leading-relaxed">
                <p>
                  Welcome to Tiny Turtles! My name is Jane. I opened my very first home daycare in{' '}
                  <span className="bg-[#FEF3C7] text-[#92400E] px-2 py-0.5 rounded-md font-bold inline-block border border-[#FDE68A]/70">
                    Montreal back in 2004
                  </span>
                  , and over the past two decades, childcare has been my lifelong passion and vocation.
                </p>
                <p>
                  With formal university and college training in{' '}
                  <span className="bg-[#DCFCE7] text-[#166534] px-2 py-0.5 rounded-md font-bold inline-block border border-[#86EFAC]/70">
                    Early Childhood Education
                  </span>{' '}
                  and{' '}
                  <span className="bg-[#E0F2FE] text-[#0369A1] px-2 py-0.5 rounded-md font-bold inline-block border border-[#BAE6FD]/70">
                    Child Psychology
                  </span>
                  , my curriculum focuses on teaching children through fun, educational activities in a loving, warm, and structured setting. Having cared for groups of up to 15 children—including little ones with special needs—I bring deep experience, calm confidence, and unhurried patience to every single day.
                </p>
                <p>
                  In our Orléans home daycare, I keep enrollment{' '}
                  <span className="bg-[#FFF7ED] text-[#9A3412] px-2 py-0.5 rounded-md font-bold inline-block border border-[#FED7AA]/70">
                    strictly small (maximum 5 children)
                  </span>{' '}
                  to ensure each child receives the tender one-on-one attention, individualized feeding and nap routines, and emotional security they need to flourish.
                </p>
              </div>

              {/* Verified Qualifications & Experience (Moved under biography, replacing A, B, C boxes) */}
              <div className="pt-6 border-t border-[#E5DCCB] space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#16A34A]" />
                  <h3 className="font-brand font-bold text-lg sm:text-xl text-[#1F3A2C]">
                    Verified Qualifications & Experience
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Qualification 1 (Mint Pastel) */}
                  <div className="p-4 sm:p-5 rounded-[28px_12px_28px_12px] bg-[#F0FDF4] border-2 border-[#86EFAC] shadow-xs hover:-translate-y-1 hover:shadow-md transition-all flex items-start gap-3.5 group">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#16A34A] shadow-2xs flex items-center justify-center shrink-0 border border-black/5 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-5 h-5 text-[#16A34A]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1F3A2C] leading-snug">
                        Degree in ECE
                      </h4>
                      <p className="text-sm text-[#4E6656] mt-1 leading-relaxed">
                        Formal Early Childhood Education degree covering curriculum planning, developmental milestones & early health.
                      </p>
                    </div>
                  </div>

                  {/* Qualification 2 (Peach Pastel) */}
                  <div className="p-4 sm:p-5 rounded-[12px_28px_12px_28px] bg-[#FFF7ED] border-2 border-[#FED7AA] shadow-xs hover:-translate-y-1 hover:shadow-md transition-all flex items-start gap-3.5 group">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#EA580C] shadow-2xs flex items-center justify-center shrink-0 border border-black/5 group-hover:scale-110 transition-transform">
                      <Heart className="w-5 h-5 text-[#EA580C]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1F3A2C] leading-snug">
                        Child Psychology Training
                      </h4>
                      <p className="text-sm text-[#4E6656] mt-1 leading-relaxed">
                        Academic background in emotional milestones, secure attachment, and compassionate behavior guidance.
                      </p>
                    </div>
                  </div>

                  {/* Qualification 3 (Buttercup Pastel) */}
                  <div className="p-4 sm:p-5 rounded-[28px_12px_28px_12px] bg-[#FFFBEB] border-2 border-[#FDE68A] shadow-xs hover:-translate-y-1 hover:shadow-md transition-all flex items-start gap-3.5 group">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#D97706] shadow-2xs flex items-center justify-center shrink-0 border border-black/5 group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5 text-[#D97706]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1F3A2C] leading-snug">
                        20+ Years Experience
                      </h4>
                      <p className="text-sm text-[#4E6656] mt-1 leading-relaxed">
                        Operating home daycares since 2004; experienced with groups up to 15 children and special needs.
                      </p>
                    </div>
                  </div>

                  {/* Qualification 4 (Sky Pastel) */}
                  <div className="p-4 sm:p-5 rounded-[12px_28px_12px_28px] bg-[#F0F9FF] border-2 border-[#7DD3FC] shadow-xs hover:-translate-y-1 hover:shadow-md transition-all flex items-start gap-3.5 group">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#0284C7] shadow-2xs flex items-center justify-center shrink-0 border border-black/5 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5 text-[#0284C7]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1F3A2C] leading-snug">
                        CPR-C & First Aid Certified
                      </h4>
                      <p className="text-sm text-[#4E6656] mt-1 leading-relaxed">
                        Certified in CPR Level C and Standard First Aid, specifically tailored for infant and child emergency care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Row */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBookingModal}
                  className="px-7 py-3.5 text-sm font-bold text-white bg-[#E28448] hover:bg-[#CF7237] rounded-full shadow-sm hover:shadow transition-colors cursor-pointer"
                >
                  Schedule a Visit with Jane
                </button>
                <button
                  onClick={() => onNavigate ? onNavigate('programs') : window.location.assign('#programs')}
                  className="text-sm font-bold text-[#2E5A44] hover:underline underline-offset-4 cursor-pointer"
                >
                  View Our Programs & Daily Schedule →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
