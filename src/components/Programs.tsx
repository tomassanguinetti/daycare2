import React, { useState, useEffect } from 'react';
import { TurtleMascot } from './TurtleMascot';
import { Baby, Sparkles, BookOpen, Sun, Check, ArrowRight, Utensils, Compass, Clock, DollarSign, Calendar } from 'lucide-react';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';
import { DailyRoutine } from './DailyRoutine';
import { NutritionMenu } from './NutritionMenu';
import { RatesLocation } from './RatesLocation';

interface ProgramsProps {
  onOpenBookingModal: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenBookingModal }) => {
  const [activeTab, setActiveTab] = useState<'infant' | 'toddler' | 'preschool'>('toddler');

  const programs = [
    {
      id: 'infant',
      title: 'Infant Care Program',
      age: '10 to 18 Months',
      badge: 'Gentle & Responsive',
      ratio: 'Low 1:3 Infant Focus',
      description:
        'A warm, soothing sanctuary where our youngest turtles develop trust and confidence. We honor your baby’s individual feeding and nap schedules while offering tender responsive care, safe floor play, and sensory stimulation.',
      icon: Baby,
      features: [
        'Cushioned, safe floor area for rolling, crawling & pulling up',
        'Personalized feeding & nap schedules tailored to home rhythms',
        'Daily sensory baskets with natural wooden toys & safe textures',
        'Gentle outdoor stroller walks for fresh air & visual wonder',
        'Dedicated clean, quiet cribs in a separate calm sleep room',
        'Daily digital log of solid food trials, naps, and milestone moments',
      ],
      hours: '7:30 AM – 5:00 PM',
      sampleDay:
        'Warm morning cuddles, tummy time & reaching toys, stroller nature ride, wholesome puree or finger food lunch, soothing nap, gentle sing-alongs.',
    },
    {
      id: 'toddler',
      title: 'Toddler Program',
      age: '18 Months to 3 Years',
      badge: 'Active Exploration',
      ratio: '1:5 Max Group Ratio',
      description:
        'Toddlerhood is a magical stage of rapid curiosity, language expansion, and growing independence. Our play-based curriculum encourages problem-solving, social cooperation, and physical coordination in a safe home setting.',
      icon: Sparkles,
      features: [
        'Hands-on sensory bins (water play, kinetic sand, oatmeal, leaves, ice)',
        'Bilingual circle time introducing English and French songs & stories',
        'Daily outdoor exploration in our secure, grassy fenced yard',
        'Gentle social guidance: sharing, turn-taking, and emotional naming',
        'Supportive, pressure-free toilet learning partnership with parents',
        'Creative process art (finger painting, safe playdough, wooden stamping)',
      ],
      hours: '7:30 AM – 5:00 PM',
      sampleDay:
        'Morning circle songs, sensory water table, backyard bug hunt, family-style warm lunch, peaceful 2-hour nap, afternoon snack and movement dance games.',
    },
    {
      id: 'preschool',
      title: 'Preschool & Kindergarten Prep',
      age: '3 to 4.5 Years',
      badge: 'Confidence & Curiosity',
      ratio: '1:5 Max Group Ratio',
      description:
        'Preparing curious minds for junior kindergarten with joyful early literacy, numeracy, self-help skills, and creative collaboration—without rigid flashcards or classroom stress.',
      icon: BookOpen,
      features: [
        'Early phonics & alphabet games woven into daily storybooks',
        'Hands-on counting, sorting, patterning, and simple nature science',
        'Fostering independence: self-dressing, hand washing, packing bags',
        'Fine motor mastery: child-safe scissors, pencil grips, tracing & beading',
        'Collaborative pretend-play corners (play kitchen, doctor, vet clinic)',
        'Confidence-building public speaking during weekly "Show & Tell"',
      ],
      hours: '7:30 AM – 5:00 PM',
      sampleDay:
        'Story discussion and prediction games, guided fine-motor crafting, outdoor obstacle course, nutritious hot lunch, quiet reading rest, cooperative building project.',
    },
  ];

  const currentProgram = programs.find((p) => p.id === activeTab)!;

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['routine', 'nutrition', 'rates', 'programs', 'programs-curriculum'].includes(hash)) {
        const targetId = hash === 'programs' ? 'programs-curriculum' : hash;
        const el = document.getElementById(targetId);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 120);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-4">
      {/* 1. Age-Based Programs & Curriculum Section */}
      <section id="programs" className="pt-8 pb-12 sm:pt-10 sm:pb-16 bg-white relative overflow-hidden">
        {/* Large transparent icon on the right of page titles starting right top corner */}
        <PageWatermarkIcon icon={Baby} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-left max-w-3xl mb-8 sm:mb-10">
            <h2 className="font-brand font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1F3A2C] tracking-tight leading-[1.12]">
              Our Daycare Programs
            </h2>
            <p className="mt-6 sm:mt-7 text-base sm:text-lg text-[#4E6656] leading-relaxed">
              Carefully curated,{' '}
              <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#FDE68A] shadow-2xs">
                play-based learning
              </span>{' '}
              tailored to each stage of your child’s emotional, social, cognitive, and physical development.
            </p>
            <PageSubtitleBanner />
          </div>

          {/* Sticky/Interactive Quick Jump Pill Navigation Bar (Fused Programs Experience) */}
          <div className="sticky top-2 z-20 mb-10 py-3 px-4 sm:px-5 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-[#E5DCCB] shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-bold text-[#1F3A2C] tracking-wide">
                Quick Jump to Section:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => scrollTo('programs-curriculum')}
                className="px-3.5 py-1.5 rounded-[14px_6px_14px_6px] bg-[#FFF7ED] border-2 border-[#FED7AA] text-xs font-bold text-[#9A3412] hover:bg-[#FFEDD5] flex items-center gap-1.5 cursor-pointer shadow-2xs hover:scale-105 transition-all"
              >
                <Baby className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Programs (10m–4y)</span>
              </button>
              <button
                onClick={() => scrollTo('routine')}
                className="px-3.5 py-1.5 rounded-[6px_14px_6px_14px] bg-[#F0FDF4] border-2 border-[#86EFAC] text-xs font-bold text-[#166534] hover:bg-[#DCFCE7] flex items-center gap-1.5 cursor-pointer shadow-2xs hover:scale-105 transition-all"
              >
                <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Daily Schedule</span>
              </button>
              <button
                onClick={() => scrollTo('nutrition')}
                className="px-3.5 py-1.5 rounded-[14px_6px_14px_6px] bg-[#FFFBEB] border-2 border-[#FDE68A] text-xs font-bold text-[#92400E] hover:bg-[#FEF3C7] flex items-center gap-1.5 cursor-pointer shadow-2xs hover:scale-105 transition-all"
              >
                <Utensils className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Meals & Nutrition</span>
              </button>
              <button
                onClick={() => scrollTo('rates')}
                className="px-3.5 py-1.5 rounded-[6px_14px_6px_14px] bg-[#F0F9FF] border-2 border-[#7DD3FC] text-xs font-bold text-[#0369A1] hover:bg-[#E0F2FE] flex items-center gap-1.5 cursor-pointer shadow-2xs hover:scale-105 transition-all"
              >
                <DollarSign className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Rates & Hours</span>
              </button>
            </div>
          </div>

          <div id="programs-curriculum">

        {/* Program Cards Grid (Playful Pastel Cards with Organic Shapes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {programs.map((prog, idx) => {
            const Icon = prog.icon;
            const isSelected = activeTab === prog.id;
            const progThemes = [
              { bg: 'bg-[#FFF7ED]', border: 'border-[#FED7AA]', activeRing: 'ring-4 ring-[#EA580C]', shape: 'rounded-[32px_14px_32px_14px]', iconBg: 'bg-white text-[#EA580C]' },
              { bg: 'bg-[#FFFBEB]', border: 'border-[#FDE68A]', activeRing: 'ring-4 ring-[#D97706]', shape: 'rounded-[14px_32px_14px_32px]', iconBg: 'bg-white text-[#D97706]' },
              { bg: 'bg-[#F0FDF4]', border: 'border-[#86EFAC]', activeRing: 'ring-4 ring-[#16A34A]', shape: 'rounded-[32px_14px_32px_14px]', iconBg: 'bg-white text-[#16A34A]' },
            ];
            const theme = progThemes[idx % progThemes.length];

            return (
              <div
                key={prog.id}
                onClick={() => setActiveTab(prog.id as any)}
                className={`p-6 ${theme.shape} ${theme.bg} border-2 ${theme.border} transition-all duration-200 cursor-pointer shadow-xs hover:shadow-lg hover:-translate-y-1.5 ${
                  isSelected
                    ? `${theme.activeRing} shadow-lg scale-[1.02]`
                    : 'opacity-90 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} shadow-2xs flex items-center justify-center font-bold border border-black/5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold bg-white px-3 py-1 rounded-full border border-black/10 text-[#1F3A2C] shadow-2xs">
                    {prog.badge}
                  </span>
                </div>

                <h3 className="font-brand font-bold text-xl text-[#1F3A2C]">
                  {prog.title}
                </h3>
                
                <div className="flex items-center gap-2 text-xs font-bold text-[#4E6656] mt-1.5">
                  <span>Ages: {prog.age}</span>
                  <span aria-hidden="true">·</span>
                  <span>{prog.ratio}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Program Deep-Dive with Playful Pastel Accent Cards */}
        <div className="mt-8 pt-8 border-t border-[#E5DCCB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#EA580C] bg-[#FFF7ED] px-3.5 py-1.5 rounded-full border border-[#FED7AA] shadow-2xs">
                  {currentProgram.badge}
                </span>
                <span className="text-xs font-bold text-[#355743]">
                  Ages: {currentProgram.age} · {currentProgram.ratio}
                </span>
              </div>

              <h3 className="font-brand font-bold text-2xl sm:text-3xl text-[#1F3A2C]">
                {currentProgram.title} Curriculum
              </h3>

              <p className="text-sm sm:text-base text-[#4E6656] leading-relaxed">
                {currentProgram.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#3D664D]">
                  Curriculum Highlights & Everyday Focus:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProgram.features.map((item, idx) => {
                    const featurePastels = [
                      { bg: 'bg-[#F0FDF4]', border: 'border-[#86EFAC]', text: 'text-[#166534]', shape: 'rounded-[22px_10px_22px_10px]' },
                      { bg: 'bg-[#FFFBEB]', border: 'border-[#FDE68A]', text: 'text-[#92400E]', shape: 'rounded-[10px_22px_10px_22px]' },
                      { bg: 'bg-[#F0F9FF]', border: 'border-[#7DD3FC]', text: 'text-[#0369A1]', shape: 'rounded-[22px_10px_22px_10px]' },
                      { bg: 'bg-[#FAF5FF]', border: 'border-[#DDD6FE]', text: 'text-[#6D28D9]', shape: 'rounded-[10px_22px_10px_22px]' },
                    ];
                    const pTheme = featurePastels[idx % featurePastels.length];
                    return (
                      <div key={idx} className={`flex items-start gap-2.5 text-xs sm:text-sm p-3.5 ${pTheme.shape} border-2 ${pTheme.bg} ${pTheme.border} ${pTheme.text} font-medium shadow-2xs hover:scale-102 transition-transform`}>
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs border border-black/5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBookingModal}
                  className="px-7 py-3.5 text-sm font-bold text-white bg-[#E28448] hover:bg-[#CF7237] rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <span>Inquire for {currentProgram.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs font-semibold text-[#63806F]">
                  1 Space available for 10+ mos · 2 spaces open in Jan 2027
                </div>
              </div>
            </div>

            {/* Right Details: A Typical Routine (Playful Pastel Card) */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-[34px_16px_34px_16px] bg-[#FAF8F5] border-3 border-[#E5DCCB] space-y-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center font-bold border-2 border-[#FDE68A] shadow-2xs">
                  <Sun className="w-5 h-5 text-[#E28448]" />
                </div>
                <div>
                  <h4 className="font-brand font-bold text-base text-[#1F3A2C]">
                    Daily Rhythm Focus
                  </h4>
                  <p className="text-xs text-[#63806F]">Balanced active exploration & peaceful calm</p>
                </div>
              </div>

              <div className="p-4 rounded-[22px_10px_22px_10px] border-2 border-[#FDE68A] bg-[#FFFBEB] text-xs sm:text-sm text-[#385443] leading-relaxed shadow-2xs">
                <p className="font-bold text-[#1F3A2C] mb-1">A Day in the Life:</p>
                <p>{currentProgram.sampleDay}</p>
              </div>

              <div className="space-y-2.5 text-xs text-[#4F6D5B]">
                <div className="flex justify-between items-center p-2.5 bg-[#FFF7ED] rounded-[14px_6px_14px_6px] border border-[#FED7AA]">
                  <span className="font-bold text-[#1F3A2C]">Hours:</span>
                  <span className="font-semibold text-[#9A3412]">7:30 AM – 5:00 PM (Mon–Fri)</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-[#F0FDF4] rounded-[6px_14px_6px_14px] border border-[#86EFAC]">
                  <span className="font-bold text-[#1F3A2C]">Group Limit:</span>
                  <span className="font-semibold text-[#166534]">Strictly max 5 children in home</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-[#FEF3C7] rounded-[14px_6px_14px_6px] border border-[#FDE68A]">
                  <span className="font-bold text-[#1F3A2C]">Nutrition:</span>
                  <span className="font-semibold text-[#92400E]">All hot lunches & 2 snacks included</span>
                </div>
                <div className="flex justify-between items-center p-2.5 bg-[#F0F9FF] rounded-[6px_14px_6px_14px] border border-[#7DD3FC]">
                  <span className="font-bold text-[#1F3A2C]">Outdoor Discovery:</span>
                  <span className="font-semibold text-[#0369A1]">Min 2 hours daily in fenced yard/parks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

    {/* 2. Daily Routine & Schedule Section (Fused into Our Programs) */}
    <div className="pt-4 border-t-2 border-[#EFE7DA]">
      <DailyRoutine />
    </div>

    {/* 3. Wholesome Meals & Weekly Nutrition Section (Fused into Our Programs) */}
    <div className="pt-4 border-t-2 border-[#EFE7DA]">
      <NutritionMenu />
    </div>

    {/* 4. Tuition, Rates & Hours Section (Fused into Our Programs) */}
    <div className="pt-4 border-t-2 border-[#EFE7DA]">
      <RatesLocation onOpenBookingModal={onOpenBookingModal} />
    </div>
  </div>
);
};
