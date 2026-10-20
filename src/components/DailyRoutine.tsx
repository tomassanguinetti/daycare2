import React, { useState } from 'react';
import { Clock, Sun, Utensils, Music, Moon, Compass, Sparkles, BookOpen } from 'lucide-react';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';

export const DailyRoutine: React.FC = () => {
  const [filterPeriod, setFilterPeriod] = useState<'all' | 'morning' | 'midday' | 'afternoon'>('all');

  const scheduleItems = [
    {
      time: '7:30 AM – 8:30 AM',
      title: 'Gentle Welcome & Free Exploration',
      category: 'morning',
      icon: Sun,
      color: 'bg-[#FAF7F2] text-[#E28448]',
      description:
        'Warm greetings, unhurried transition from parents, morning hugs, and child-led gentle play (puzzles, soft toys, sensory play dough).',
      highlight: 'Calm morning start to ease separation anxiety',
    },
    {
      time: '8:30 AM – 9:00 AM',
      title: 'Wholesome Morning Snack',
      category: 'morning',
      icon: Utensils,
      color: 'bg-[#EAF2EC] text-[#2D5A40]',
      description:
        'Fresh sliced organic fruit (berries, bananas, melon), whole grain toast or homemade oat muffins, and whole milk or water.',
      highlight: 'Seated family-style dining etiquette',
    },
    {
      time: '9:00 AM – 9:45 AM',
      title: 'Circle Time & Bilingual Songs',
      category: 'morning',
      icon: Music,
      color: 'bg-[#FAF7F2] text-[#E28448]',
      description:
        'Interactive morning circle with calendar, weather check, cheerful sing-alongs, finger plays, and early French & English nursery rhymes.',
      highlight: 'Language development & listening skills',
    },
    {
      time: '9:45 AM – 11:15 AM',
      title: 'Outdoor Backyard Play & Stroller Walks',
      category: 'morning',
      icon: Compass,
      color: 'bg-[#EAF2EC] text-[#2D5A40]',
      description:
        'Lots of fresh air! Running in our fenced lush backyard, sandbox digging, sensory water table, bug observing, and neighbourhood park stroller walks.',
      highlight: 'Gross motor energy release & nature connection',
    },
    {
      time: '11:15 AM – 11:45 AM',
      title: 'Sensory Arts & Fine Motor Stations',
      category: 'morning',
      icon: Sparkles,
      color: 'bg-[#FAF7F2] text-[#E28448]',
      description:
        'Hands-on exploration: washable non-toxic finger painting, paper collage, threading wooden beads, building with blocks, and sensory rice bins.',
      highlight: 'Pencil-grip preparation & creative expression',
    },
    {
      time: '11:45 AM – 12:30 PM',
      title: 'Nutritious Homemade Hot Lunch',
      category: 'midday',
      icon: Utensils,
      color: 'bg-[#EAF2EC] text-[#2D5A40]',
      description:
        'Freshly cooked balanced meal (e.g. shepherd’s pie, whole wheat pasta with veggies and chicken, mild lentil stew) with steamed vegetables and milk.',
      highlight: 'Fueling growing bodies with scratch-made nutrition',
    },
    {
      time: '12:30 PM – 2:30 PM',
      title: 'Quiet Rest & Nap Time',
      category: 'midday',
      icon: Moon,
      color: 'bg-[#EBF2F7] text-[#2F6188]',
      description:
        'Personal sanitized cots with cozy blankets from home, soothing white noise or soft lullabies, and gentle back-rubbing to help toddlers drift to sleep.',
      highlight: 'Essential brain rest and emotional restoration',
    },
    {
      time: '2:30 PM – 3:15 PM',
      title: 'Afternoon Wake-Up & Snack',
      category: 'afternoon',
      icon: Utensils,
      color: 'bg-[#FAF7F2] text-[#E28448]',
      description:
        'Gentle waking, diaper checks / potty visits, and an energizing snack: cheese & whole grain crackers, yogurt with chia seeds, or sliced apples.',
      highlight: 'Hydration and joyful afternoon recharge',
    },
    {
      time: '3:15 PM – 4:30 PM',
      title: 'Music, Movement & Afternoon Yard Play',
      category: 'afternoon',
      icon: Music,
      color: 'bg-[#EAF2EC] text-[#2D5A40]',
      description:
        'Dancing with scarves, rhythm sticks, obstacle courses, or second outdoor session in the backyard garden as the afternoon cools.',
      highlight: 'Coordination, cooperative games, and joy',
    },
    {
      time: '4:30 PM – 5:00 PM',
      title: 'Quiet Story Nook & Family Reunion',
      category: 'afternoon',
      icon: BookOpen,
      color: 'bg-[#FAF7F2] text-[#E28448]',
      description:
        'Cozy lap reading, quiet magnetic tiles, day recap with caregiver, and happy reunions as parents arrive for pickup.',
      highlight: 'Daily verbal debrief & photo updates shared',
    },
  ];

  const filteredItems =
    filterPeriod === 'all'
      ? scheduleItems
      : scheduleItems.filter((item) => item.category === filterPeriod);

  return (
    <section id="routine" className="pt-8 pb-16 sm:pt-10 sm:pb-24 bg-white relative overflow-hidden">
      {/* Large transparent icon on the right of page titles starting right top corner */}
      <PageWatermarkIcon icon={Clock} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-12 max-w-3xl">
          <h2 className="font-brand font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1F3A2C] tracking-tight leading-[1.12]">
            Daily Routine
          </h2>
          <p className="mt-6 sm:mt-7 text-base sm:text-lg text-[#4E6656] leading-relaxed">
            Young children thrive on predictability. Our daily rhythm provides structure and safety with{' '}
            <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#FDE68A] shadow-2xs">
              plenty of flexibility
            </span>{' '}
            for individual developmental needs.
          </p>
          <PageSubtitleBanner />
        </div>

        {/* Filter Tabs (Playful Pastel Pill Strip) */}
        <div className="flex justify-start mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-[#FFFBEB] rounded-2xl border-2 border-[#FDE68A] text-xs sm:text-sm font-semibold gap-1 shrink-0 shadow-2xs">
            <button
              onClick={() => setFilterPeriod('all')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filterPeriod === 'all'
                  ? 'bg-[#2E5A44] text-white shadow-xs font-bold'
                  : 'text-[#587262] hover:text-[#1F3A2C] hover:bg-white/70'
              }`}
            >
              Full Day (7:30 AM – 5:00 PM)
            </button>
            <button
              onClick={() => setFilterPeriod('morning')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filterPeriod === 'morning'
                  ? 'bg-[#2E5A44] text-white shadow-xs font-bold'
                  : 'text-[#587262] hover:text-[#1F3A2C] hover:bg-white/70'
              }`}
            >
              Morning
            </button>
            <button
              onClick={() => setFilterPeriod('midday')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filterPeriod === 'midday'
                  ? 'bg-[#2E5A44] text-white shadow-xs font-bold'
                  : 'text-[#587262] hover:text-[#1F3A2C] hover:bg-white/70'
              }`}
            >
              Lunch & Nap
            </button>
            <button
              onClick={() => setFilterPeriod('afternoon')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                filterPeriod === 'afternoon'
                  ? 'bg-[#2E5A44] text-white shadow-xs font-bold'
                  : 'text-[#587262] hover:text-[#1F3A2C] hover:bg-white/70'
              }`}
            >
              Afternoon
            </button>
          </div>
        </div>

        {/* Interactive Timeline List with Playful Pastel Cards */}
        <div className="space-y-4 max-w-3xl">
          {filteredItems.map((item, idx) => {
            const Icon = item.icon;
            const routineThemes = [
              { bg: 'bg-[#FFFBEB]', border: 'border-[#FDE68A]', shape: 'rounded-[30px_12px_30px_12px]', iconColor: 'text-[#D97706]', badgeBg: 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]' },
              { bg: 'bg-[#F0FDF4]', border: 'border-[#86EFAC]', shape: 'rounded-[12px_30px_12px_30px]', iconColor: 'text-[#16A34A]', badgeBg: 'bg-[#DCFCE7] text-[#166534] border-[#86EFAC]' },
              { bg: 'bg-[#FFF7ED]', border: 'border-[#FED7AA]', shape: 'rounded-[30px_12px_30px_12px]', iconColor: 'text-[#EA580C]', badgeBg: 'bg-[#FFEDD5] text-[#9A3412] border-[#FED7AA]' },
              { bg: 'bg-[#F0F9FF]', border: 'border-[#7DD3FC]', shape: 'rounded-[12px_30px_12px_30px]', iconColor: 'text-[#0284C7]', badgeBg: 'bg-[#E0F2FE] text-[#0369A1] border-[#7DD3FC]' },
              { bg: 'bg-[#FAF5FF]', border: 'border-[#DDD6FE]', shape: 'rounded-[30px_12px_30px_12px]', iconColor: 'text-[#7C3AED]', badgeBg: 'bg-[#F3E8FF] text-[#6D28D9] border-[#DDD6FE]' },
              { bg: 'bg-[#FFF1F2]', border: 'border-[#FECDD3]', shape: 'rounded-[12px_30px_12px_30px]', iconColor: 'text-[#E11D48]', badgeBg: 'bg-[#FFE4E6] text-[#BE123C] border-[#FECDD3]' },
            ];
            const theme = routineThemes[idx % routineThemes.length];

            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 ${theme.shape} ${theme.bg} border-2 ${theme.border} shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-2xs flex items-center justify-center shrink-0 border border-black/5 mt-0.5">
                      <Icon className={`w-6 h-6 ${theme.iconColor}`} />
                    </div>
                    <div>
                      {/* Hours placed on top with playful badge */}
                      <div className="inline-block text-xs font-mono font-bold text-[#92400E] bg-white px-3 py-1 rounded-lg border border-black/5 shadow-2xs mb-1.5">
                        {item.time}
                      </div>
                      <h3 className="font-brand font-bold text-base sm:text-lg text-[#1F3A2C]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className={`hidden md:inline-block text-xs font-bold ${theme.badgeBg} px-3 py-1 rounded-full border shadow-2xs shrink-0`}>
                    {item.highlight}
                  </span>
                </div>

                <p className="mt-3 text-sm text-[#4E6656] leading-relaxed pl-0 sm:pl-15">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footnote reassurance in a playful pastel card */}
        <div className="mt-12 p-5 rounded-[26px_12px_26px_12px] bg-[#FFFBEB] border-3 border-[#FDE68A] text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-[#78350F]">
            <span className="font-bold text-[#1F3A2C] bg-[#FEF3C7] px-2 py-0.5 rounded-md border border-[#FDE68A] mr-1.5">Note for Infants:</span>
            Babies under 18 months maintain their personal sleeping and feeding schedules until naturally transitioning to the group routine.
          </p>
        </div>

      </div>
    </section>
  );
};
