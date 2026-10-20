import React from 'react';
import { Hero } from './Hero';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';
import { TurtleMascot } from './TurtleMascot';
import { Reviews } from './Reviews';
import {
  Heart,
  Baby,
  Clock,
  Eye,
  Utensils,
  DollarSign,
  Star,
  HelpCircle,
  Calendar,
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import { PageId } from './Navbar';

interface HomeOverviewProps {
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: () => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const sections: {
    id: PageId;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    tag: string;
  }[] = [
    {
      id: 'about',
      title: 'About Us & Philosophy',
      subtitle: '20+ Years Early Childhood Care in Orléans & Montreal',
      description:
        'Meet educator Jane Doe. Holding an ECE degree, Child Psychology university studies, and Standard CPR-C certification, she offers a loving, secure maternal environment with the proven ABC Daycare approach.',
      icon: Heart,
      accentColor: 'text-[#E28448]',
      tag: 'Educator Spotlight',
    },
    {
      id: 'programs',
      title: 'Our Programs (10m – 4.5y)',
      subtitle: 'Infant Sanctuary, Toddler Discovery & Preschool Prep',
      description:
        'Small 1:5 ratio tailored to early developmental milestones. Personalized infant feeding & nap schedules, language-rich bilingual circle time, sensory bins, and kindergarten readiness.',
      icon: Baby,
      accentColor: 'text-[#2D5A40]',
      tag: 'Care Programs',
    },
    {
      id: 'routine',
      title: 'Daily Rhythm & Schedule',
      subtitle: 'Predictable, Nurturing & Unhurried Days',
      description:
        'Explore our balanced daily timetable featuring morning free-play, sensory exploration, two hours of fenced outdoor play, family-style hot lunch, and restorative nap time.',
      icon: Clock,
      accentColor: 'text-[#E28448]',
      tag: 'Daily Schedule',
    },
    {
      id: 'spaces',
      title: 'Virtual Tour of Our Spaces',
      subtitle: 'Sunlit Playroom, Quiet Sleep Room & Fenced Yard',
      description:
        'Take a photo tour inside our childproofed Orléans home. Features low Montessori shelves, non-toxic wooden toys, organic backyard garden, and private infant sleep nursery.',
      icon: Eye,
      accentColor: 'text-[#2D5A40]',
      tag: 'Photo Gallery',
    },
    {
      id: 'nutrition',
      title: 'Wholesome Nutrition & Menu',
      subtitle: '100% Home Cooked Hot Lunches & Organic Snacks',
      description:
        'Compliant with Canada’s Food Guide. View our sample weekly meal planner complete with fresh vegetables, fruit smoothies, warm entrées, and strict nut-free allergy protocols.',
      icon: Utensils,
      accentColor: 'text-[#E28448]',
      tag: 'Weekly Menu',
    },
    {
      id: 'rates',
      title: 'Tuition & Hours of Care',
      subtitle: 'Transparent Rates & Convenient Schedule',
      description:
        'Convenient hours (7:30 AM – 5:00 PM, Monday through Friday). Full-time and part-time tuition details, what’s included in your rate, and annual official tax receipts.',
      icon: DollarSign,
      accentColor: 'text-[#2D5A40]',
      tag: 'Rates & Hours',
    },
    {
      id: 'reviews',
      title: 'What Parents Say',
      subtitle: 'Glowing Reviews from Ottawa & Orléans Families',
      description:
        'Discover heartwarming stories from parents whose little ones blossomed in our care—praising smooth infant transitions, gentle potty learning, and compassionate communication.',
      icon: Star,
      accentColor: 'text-[#E28448]',
      tag: 'Parent Reviews',
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything You Need to Know Before Enrolling',
      description:
        'Clear answers on our illness policy, statutory holiday closures, trial period transitions, daily digital updates, and waitlist registration procedure.',
      icon: HelpCircle,
      accentColor: 'text-[#2D5A40]',
      tag: 'Help & FAQs',
    },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        onOpenBookingModal={onOpenBookingModal}
        onNavigate={onNavigate}
      />

      {/* 2. Explore Tiny Turtles Daycare Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        {/* Large transparent icon on the right of page titles starting right top corner */}
        <PageWatermarkIcon icon={Compass} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-left max-w-3xl mb-12 sm:mb-14">
            <h2 className="font-brand font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1F3A2C] tracking-tight leading-[1.12]">
              Everything You Want to Know About Tiny Turtles
            </h2>
            <p className="mt-6 sm:mt-7 text-base text-[#4E6656] leading-relaxed">
              Explore our{' '}
              <span className="bg-[#E0F2FE] text-[#0369A1] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#BAE6FD] shadow-2xs">
                curriculum
              </span>
              ,{' '}
              <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#FDE68A] shadow-2xs">
                home environment
              </span>
              ,{' '}
              <span className="bg-[#DCFCE7] text-[#166534] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#86EFAC] shadow-2xs">
                daily routines
              </span>
              , and educator background. Click any section below to learn more with our smooth page experience.
            </p>
            <PageSubtitleBanner />
          </div>

          {/* Cards Grid (Playful Pastel Cards with Organic Shapes) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {sections.map((item, index) => {
              const Icon = item.icon;
              const themes = [
                { bg: 'bg-[#FFF7ED]', border: 'border-[#FED7AA]', shape: 'rounded-[30px_12px_30px_12px]', iconColor: 'text-[#EA580C]', iconBg: 'bg-white text-[#EA580C]' },
                { bg: 'bg-[#F0FDF4]', border: 'border-[#86EFAC]', shape: 'rounded-[12px_30px_12px_30px]', iconColor: 'text-[#16A34A]', iconBg: 'bg-white text-[#16A34A]' },
                { bg: 'bg-[#FFFBEB]', border: 'border-[#FDE68A]', shape: 'rounded-[28px_28px_10px_28px]', iconColor: 'text-[#D97706]', iconBg: 'bg-white text-[#D97706]' },
                { bg: 'bg-[#F0F9FF]', border: 'border-[#7DD3FC]', shape: 'rounded-[12px_28px_28px_12px]', iconColor: 'text-[#0284C7]', iconBg: 'bg-white text-[#0284C7]' },
                { bg: 'bg-[#FFF1F2]', border: 'border-[#FECDD3]', shape: 'rounded-[30px_14px_30px_14px]', iconColor: 'text-[#E11D48]', iconBg: 'bg-white text-[#E11D48]' },
                { bg: 'bg-[#FAF5FF]', border: 'border-[#DDD6FE]', shape: 'rounded-[14px_30px_14px_30px]', iconColor: 'text-[#7C3AED]', iconBg: 'bg-white text-[#7C3AED]' },
                { bg: 'bg-[#FEF3C7]', border: 'border-[#FCD34D]', shape: 'rounded-[28px_12px_28px_28px]', iconColor: 'text-[#B45309]', iconBg: 'bg-white text-[#B45309]' },
                { bg: 'bg-[#DCFCE7]', border: 'border-[#86EFAC]', shape: 'rounded-[12px_30px_30px_12px]', iconColor: 'text-[#15803D]', iconBg: 'bg-white text-[#15803D]' },
              ];
              const theme = themes[index % themes.length];

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'reviews') {
                      const el = document.getElementById('reviews');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        onNavigate('reviews');
                      }
                    } else {
                      onNavigate(item.id);
                    }
                  }}
                  className={`relative overflow-hidden p-5 sm:p-6 ${theme.shape} ${theme.bg} border-2 ${theme.border} hover:shadow-lg hover:-translate-y-1.5 transition-all duration-200 group cursor-pointer flex flex-col justify-between min-h-[114px] sm:min-h-[132px]`}
                >
                  {/* Large Transparent Background Icon */}
                  <Icon
                    className={`absolute -right-2 -bottom-2 w-16 h-16 sm:w-20 sm:h-20 ${theme.iconColor} opacity-20 group-hover:opacity-35 group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 pointer-events-none stroke-[1.5]`}
                    aria-hidden="true"
                  />

                  {/* Icon badge with playful border */}
                  <div className={`w-9 h-9 rounded-2xl bg-white shadow-2xs flex items-center justify-center ${theme.iconColor} mb-2 shrink-0 group-hover:scale-110 transition-transform border border-black/5`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Title */}
                  <h3 className="font-brand font-bold text-sm sm:text-base text-[#1F3A2C] group-hover:text-[#2E5A44] transition-colors relative z-10 leading-snug">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* 3. Parent Reviews Section (Featured Section on the Homepage) */}
          <div className="mt-20 pt-6 border-t-2 border-[#EFE7DA]">
            <Reviews />
          </div>

          {/* Bottom Fast Action Banner with Playful Organic Geometry */}
          <div className="mt-14 p-8 sm:p-10 rounded-[38px_18px_38px_18px] bg-[#2D5A40] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border-4 border-[#86EFAC]/40">
            <div className="flex items-center gap-5 text-center lg:text-left">
              <div className="hidden sm:flex w-16 h-16 rounded-[22px_10px_22px_10px] bg-white/20 items-center justify-center shrink-0 border-2 border-white/30 shadow-sm">
                <TurtleMascot size={46} variant="waving" />
              </div>
              <div>
                <h3 className="font-brand font-bold text-xl sm:text-2xl text-white">
                  Ready to Meet Jane in Person?
                </h3>
                <p className="text-xs sm:text-sm text-[#D1E6D8] mt-1 max-w-xl">
                  We invite prospective parents and their little ones to tour our playroom, meet Jane, and discuss enrollment availability for 2026/2027.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenBookingModal}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#1F3A2C] bg-[#FFFBEB] hover:bg-white rounded-full transition-all cursor-pointer shadow-md hover:scale-105 border-2 border-[#FDE68A]"
              >
                Schedule a Visit
              </button>
              <button
                onClick={() => onNavigate('inquire')}
                className="px-5 py-3.5 text-xs sm:text-sm font-bold text-white bg-white/10 border-2 border-white/30 hover:bg-white/20 rounded-full transition-all cursor-pointer hover:scale-105"
              >
                Check Availability Online
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
