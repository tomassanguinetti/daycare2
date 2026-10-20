import React, { useState } from 'react';
import { Clock, DollarSign, FileText, CheckCircle2, Shield, Info, Calendar, Sparkles, MapPin } from 'lucide-react';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';

interface RatesLocationProps {
  onOpenBookingModal: () => void;
}

export const RatesLocation: React.FC<RatesLocationProps> = ({ onOpenBookingModal }) => {
  const [selectedRateTab, setSelectedRateTab] = useState<'fulltime' | 'parttime'>('fulltime');

  return (
    <section id="rates" className="pt-8 pb-16 sm:pt-10 sm:pb-24 bg-white relative overflow-hidden">
      {/* Large transparent icon on the right of page titles starting right top corner */}
      <PageWatermarkIcon icon={DollarSign} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-10">
          <h2 className="font-brand font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1F3A2C] tracking-tight leading-[1.12]">
            Tuition & Hours of Care
          </h2>
          <p className="mt-6 sm:mt-7 text-base sm:text-lg text-[#4E6656] leading-relaxed">
            Transparent pricing with{' '}
            <span className="bg-[#DCFCE7] text-[#166534] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#86EFAC] shadow-2xs">
              zero hidden fees
            </span>
            . Nutritious home-cooked meals, snacks, milk, baby wipes, and learning supplies are{' '}
            <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#FDE68A] shadow-2xs">
              100% included
            </span>
            .
          </p>
          <PageSubtitleBanner />
        </div>

        {/* Current Vacancies Alert Banner (Playful Pastel Buttercup Card) */}
        <div className="max-w-4xl mx-auto mb-12 bg-[#FFFBEB] border-3 border-[#FDE68A] rounded-[32px_14px_32px_14px] p-5 sm:p-6 text-[#1F3A2C] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#D97706] shadow-2xs flex items-center justify-center shrink-0 border border-[#FDE68A]">
              <Sparkles className="w-6 h-6 text-[#EA580C]" />
            </div>
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#B45309]">
                Current Availability Status
              </div>
              <div className="text-sm sm:text-base font-bold text-[#1F3A2C] mt-0.5">
                1 Space Open Now (Ages 10+ mos) · 2 Spaces Opening January 2027
              </div>
            </div>
          </div>

          <button
            onClick={onOpenBookingModal}
            className="px-6 py-3 rounded-full bg-[#E28448] hover:bg-[#CF7237] text-white text-xs sm:text-sm font-bold shrink-0 transition-all hover:scale-105 cursor-pointer shadow-md"
          >
            Inquire for Available Spot →
          </button>
        </div>

        {/* 2-Column Grid with Playful Pastel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Tuition Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#E5DCCB] pb-4">
              <div className="flex items-center gap-2 p-1.5 bg-[#FFFBEB] rounded-[20px_8px_20px_8px] border-2 border-[#FDE68A] shadow-2xs">
                <button
                  onClick={() => setSelectedRateTab('fulltime')}
                  className={`px-4 py-2 text-xs font-bold rounded-[14px_6px_14px_6px] transition-all cursor-pointer ${
                    selectedRateTab === 'fulltime'
                      ? 'bg-[#2E5A44] text-white shadow-xs'
                      : 'text-[#587262] hover:text-[#1F3A2C] hover:bg-white/60'
                  }`}
                >
                  Full-Time (Mon–Fri)
                </button>
                <button
                  onClick={() => setSelectedRateTab('parttime')}
                  className={`px-4 py-2 text-xs font-bold rounded-[14px_6px_14px_6px] transition-all cursor-pointer ${
                    selectedRateTab === 'parttime'
                      ? 'bg-[#2E5A44] text-white shadow-xs'
                      : 'text-[#587262] hover:text-[#1F3A2C] hover:bg-white/60'
                  }`}
                >
                  Part-Time (3–4 Days)
                </button>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-[#166534] bg-[#DCFCE7] px-3.5 py-1.5 rounded-full border border-[#86EFAC] shadow-2xs">
                  Tax Receipts Provided
                </span>
              </div>
            </div>

            {/* Tuition Rate Display (Playful Pastel Cards) */}
            {selectedRateTab === 'fulltime' ? (
              <div className="p-6 sm:p-7 rounded-[32px_14px_32px_14px] bg-[#F0FDF4] border-2 border-[#86EFAC] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:shadow-md transition-shadow">
                <div>
                  <div className="text-xs font-extrabold text-[#166534] uppercase tracking-wider">
                    Full-Time Enrollment
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-5xl font-extrabold text-[#1F3A2C] font-mono">$50</span>
                    <span className="text-sm font-bold text-[#166534] bg-white px-2.5 py-0.5 rounded-lg border border-[#86EFAC] shadow-2xs">/ day ($250 / week)</span>
                  </div>
                  <p className="text-xs text-[#4E6656] mt-2 font-medium">
                    Monday to Friday · 7:30 AM to 5:00 PM · Guaranteed spot
                  </p>
                </div>

                <button
                  onClick={onOpenBookingModal}
                  className="px-6 py-3.5 bg-[#2E5A44] hover:bg-[#1F3D2E] text-white text-xs sm:text-sm font-bold rounded-full shadow-md hover:scale-105 transition-all shrink-0 cursor-pointer"
                >
                  Reserve Full-Time Spot
                </button>
              </div>
            ) : (
              <div className="p-6 sm:p-7 rounded-[32px_14px_32px_14px] bg-[#FFF7ED] border-2 border-[#FED7AA] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:shadow-md transition-shadow">
                <div>
                  <div className="text-xs font-extrabold text-[#9A3412] uppercase tracking-wider">
                    Part-Time Enrollment
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-5xl font-extrabold text-[#1F3A2C] font-mono">$55</span>
                    <span className="text-sm font-bold text-[#9A3412] bg-white px-2.5 py-0.5 rounded-lg border border-[#FED7AA] shadow-2xs">/ day (3 or 4 days/wk)</span>
                  </div>
                  <p className="text-xs text-[#526B5C] mt-2 font-medium">
                    Consistent set schedule · Subject to peer-pairing availability
                  </p>
                </div>

                <button
                  onClick={onOpenBookingModal}
                  className="px-6 py-3.5 bg-[#E28448] hover:bg-[#CF7237] text-white text-xs sm:text-sm font-bold rounded-full shadow-md hover:scale-105 transition-all shrink-0 cursor-pointer"
                >
                  Inquire Part-Time Days
                </button>
              </div>
            )}

            {/* Inclusions (Playful Pastel Cards Grid) */}
            <div className="space-y-3 pt-2">
              <h4 className="font-brand font-bold text-base text-[#1F3A2C] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                <span>What’s Included in Your Daily Rate:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 p-3 rounded-[16px_6px_16px_6px] bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] shadow-2xs font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D97706] shrink-0" />
                  <span>Wholesome home-cooked lunch & 2 snacks</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-[6px_16px_6px_16px] bg-[#F0FDF4] border border-[#86EFAC] text-[#166534] shadow-2xs font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] shrink-0" />
                  <span>Gentle baby wipes & paper supplies</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-[16px_6px_16px_6px] bg-[#F0F9FF] border border-[#7DD3FC] text-[#0369A1] shadow-2xs font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] shrink-0" />
                  <span>Organic cow's milk & oat milk</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-[6px_16px_6px_16px] bg-[#FAF5FF] border border-[#DDD6FE] text-[#6D28D9] shadow-2xs font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shrink-0" />
                  <span>All art, sensory bins & craft materials</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-[16px_6px_16px_6px] bg-[#FFF7ED] border border-[#FED7AA] text-[#9A3412] shadow-2xs font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] shrink-0" />
                  <span>Daily digital photos & milestone updates</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-[6px_16px_6px_16px] bg-[#FFF1F2] border border-[#FECDD3] text-[#9F1239] shadow-2xs font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] shrink-0" />
                  <span>Mineral sunscreen applied before yard play</span>
                </div>
              </div>
            </div>

            {/* CRA Tax Deductible Callout */}
            <div className="p-4 sm:p-5 rounded-[22px_10px_22px_10px] bg-[#F0FDF4] border-2 border-[#86EFAC] flex items-start gap-3.5 text-xs text-[#166534] shadow-2xs">
              <FileText className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1F3A2C] text-sm">Official CRA Child Care Tax Receipts:</strong>
                <p className="mt-1 text-[#355743] leading-relaxed">
                  We issue official child care receipts every February for your Canadian tax return. Child care expenses can be deducted to significantly lower your family's taxable income.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Schedule & Contact Reference */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6 lg:border-l border-[#E5DCCB]">
            
            {/* Hours of Operation (Playful Pastel Container) */}
            <div className="p-6 sm:p-7 rounded-[34px_16px_34px_16px] bg-[#FAF8F5] border-3 border-[#E5DCCB] space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center font-bold border-2 border-[#FDE68A] shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-brand font-bold text-lg text-[#1F3A2C]">
                    Hours of Operation
                  </h3>
                  <p className="text-xs text-[#688673]">Monday through Friday</p>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center p-2.5 bg-[#FFF7ED] rounded-[14px_6px_14px_6px] border border-[#FED7AA]">
                  <span className="font-semibold text-[#1F3A2C]">Care Hours:</span>
                  <span className="font-bold text-[#EA580C]">7:30 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-[#F0FDF4] rounded-[6px_14px_6px_14px] border border-[#86EFAC]">
                  <span className="font-semibold text-[#1F3A2C]">Morning Drop-off:</span>
                  <span className="text-[#166534] font-medium">7:30 AM – 9:00 AM</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-[#FEF3C7] rounded-[14px_6px_14px_6px] border border-[#FDE68A]">
                  <span className="font-semibold text-[#1F3A2C]">Afternoon Pick-up:</span>
                  <span className="text-[#92400E] font-medium">4:00 PM – 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-[#FFF1F2] rounded-[6px_14px_6px_14px] border border-[#FECDD3]">
                  <span className="font-semibold text-[#1F3A2C]">Weekends & Stat Holidays:</span>
                  <span className="text-[#9F1239] font-bold">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Reference to Contact & Map */}
            <div className="p-5 bg-[#F0F9FF] rounded-[24px_10px_24px_10px] border-2 border-[#7DD3FC] text-xs text-[#0369A1] space-y-2.5 shadow-2xs">
              <div className="font-bold text-sm text-[#1F3A2C]">Looking for Our Location & Map?</div>
              <p className="leading-relaxed">
                Neighborhood directions, drop-off details, and our Orléans map are located on the Contact page.
              </p>
              <button
                onClick={() => window.location.assign('#inquire')}
                className="mt-1 px-5 py-2.5 bg-[#2E5A44] hover:bg-[#1F3D2E] text-white font-bold rounded-full text-xs transition-transform hover:scale-105 cursor-pointer shadow-sm"
              >
                Go to Contact & Map →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
