import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the enrollment and waitlist process work?',
      a: 'We encourage parents to contact us as early as possible (often during pregnancy or maternity leave). First, you submit an inquiry form or book an in-person tour. During your visit, you meet Jane, tour our playroom and fenced backyard, and ask any questions. If there is a mutual fit and an upcoming opening, a modest deposit secures your child’s spot.',
    },
    {
      q: 'What is your sick child policy?',
      a: 'To keep all children and our educator healthy, children must remain home if they have a fever (38°C/100.4°F or higher), vomiting or diarrhea within 24 hours, or a contagious unexplained rash. Children may return once they are fever-free without medication for 24 hours and feeling well enough to participate in normal daily activities.',
    },
    {
      q: 'What items do parents need to provide?',
      a: 'Parents provide: disposable or cloth diapers, diaper rash cream, two complete weather-appropriate changes of clothes, indoor non-slip shoes or slippers, seasonal outdoor gear (boots, snowsuit or splash pants, hat), and a favorite soothing sleep item (e.g. small lovey or crib blanket). We provide all meals, organic snacks, milk, baby wipes, and craft supplies.',
    },
    {
      q: 'How do you handle nap times if my toddler is used to a different schedule?',
      a: 'For toddlers, our main quiet rest period is from 12:30 PM to 2:30 PM. We create a cozy, dim, calming environment with soft lullabies. Children who wake early or do not sleep are invited to do quiet activities such as looking at picture books or doing gentle wooden puzzles. For infants under 18 months, we follow their individual natural sleep schedule until they naturally transition to one midday nap.',
    },
    {
      q: 'Do you assist with toilet learning and potty training?',
      a: 'Yes, absolutely! We partner closely with parents during this big developmental milestone. Once you start introducing the potty at home and your toddler demonstrates readiness, we maintain consistent gentle reminders throughout the day with positive encouragement, lots of patience, and zero pressure.',
    },
    {
      q: 'Are your fees eligible for the Canadian Child Care Expense Deduction?',
      a: 'Yes. Official child care receipts are issued every February with our legal business identification and SIN/BN so you can claim child care expenses on your Canadian and Ontario tax returns (deductible against the higher-earning or lower-earning spouse according to CRA guidelines).',
    },
    {
      q: 'How will I know how my child is doing during the day?',
      a: 'We know how much parents miss their little ones! We send daily photo updates and a daily recap message summarizing what your child ate, nap duration, outdoor adventures, and special milestones. You are also always welcome to send a quick check-in text.',
    },
  ];

  return (
    <section id="faq" className="pt-8 pb-16 sm:pt-10 sm:pb-24 bg-white relative overflow-hidden">
      {/* Large transparent icon on the right of page titles starting right top corner */}
      <PageWatermarkIcon icon={HelpCircle} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16 max-w-3xl">
          <h2 className="font-brand font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1F3A2C] tracking-tight leading-[1.12]">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 sm:mt-7 text-base sm:text-lg text-[#4E6656] leading-relaxed">
            Everything you need to know about everyday life at{' '}
            <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#FDE68A] shadow-2xs">
              Tiny Turtles Home Daycare
            </span>
            .
          </p>
          <PageSubtitleBanner />
        </div>

        {/* Playful Pastel Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqPastels = [
              { bg: 'bg-[#F0FDF4]', border: 'border-[#86EFAC]', shape: 'rounded-[28px_12px_28px_12px]', closedBg: 'bg-[#F0FDF4]/50 hover:bg-[#F0FDF4]', closedBorder: 'border-[#86EFAC]/70' },
              { bg: 'bg-[#FFFBEB]', border: 'border-[#FDE68A]', shape: 'rounded-[12px_28px_12px_28px]', closedBg: 'bg-[#FFFBEB]/50 hover:bg-[#FFFBEB]', closedBorder: 'border-[#FDE68A]/70' },
              { bg: 'bg-[#FFF7ED]', border: 'border-[#FED7AA]', shape: 'rounded-[28px_12px_28px_12px]', closedBg: 'bg-[#FFF7ED]/50 hover:bg-[#FFF7ED]', closedBorder: 'border-[#FED7AA]/70' },
              { bg: 'bg-[#F0F9FF]', border: 'border-[#7DD3FC]', shape: 'rounded-[12px_28px_12px_28px]', closedBg: 'bg-[#F0F9FF]/50 hover:bg-[#F0F9FF]', closedBorder: 'border-[#7DD3FC]/70' },
              { bg: 'bg-[#FAF5FF]', border: 'border-[#DDD6FE]', shape: 'rounded-[28px_12px_28px_12px]', closedBg: 'bg-[#FAF5FF]/50 hover:bg-[#FAF5FF]', closedBorder: 'border-[#DDD6FE]/70' },
            ];
            const pTheme = faqPastels[index % faqPastels.length];

            return (
              <div
                key={index}
                className={`transition-all duration-200 border-2 ${pTheme.shape} ${
                  isOpen
                    ? `${pTheme.bg} ${pTheme.border} p-5 sm:p-6 shadow-md`
                    : `${pTheme.closedBg} ${pTheme.closedBorder} p-4 sm:p-5 shadow-2xs hover:-translate-y-0.5`
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#2D5A40] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-brand font-bold text-base sm:text-lg text-[#1F3A2C]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-2xl bg-white shadow-2xs flex items-center justify-center shrink-0 transition-transform duration-200 border border-black/5 ${
                      isOpen ? 'rotate-180 text-[#EA580C]' : 'text-[#8C9C92]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 text-sm sm:text-base text-[#4E6656] leading-relaxed border-t border-black/5 mt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs sm:text-sm text-[#587262]">
          Have a question not listed here?{' '}
          <a href="#inquire" className="font-bold text-[#2E5A44] hover:underline underline-offset-4">
            Send us a message or call directly →
          </a>
        </div>

      </div>
    </section>
  );
};
