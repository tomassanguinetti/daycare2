import React, { useState } from 'react';
import { Utensils, Apple, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';
import healthyLunchImage from '../assets/images/daycare_healthy_lunch_1791746117231.jpg';

export const NutritionMenu: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const days = [
    {
      name: 'Monday',
      morningSnack: 'Warm cinnamon oatmeal with sliced bananas & hemp seeds, whole milk',
      lunch: 'Homemade turkey shepherd’s pie with sweet peas, steamed broccoli florets & water',
      afternoonSnack: 'Cheddar cheese cubes, crisp cucumber rounds & whole grain pita triangles',
    },
    {
      name: 'Tuesday',
      morningSnack: 'Whole grain toast with sunflower seed butter, fresh strawberries, whole milk',
      lunch: 'Mild chicken noodle soup with soft carrots, whole wheat bread rolls & milk',
      afternoonSnack: 'Plain Greek yogurt dip with organic blueberries & honey-free oat granola',
    },
    {
      name: 'Wednesday',
      morningSnack: 'Homemade banana zucchini mini muffins, orange wedges & whole milk',
      lunch: 'Whole grain rotini with lean ground beef bolognese, baby carrots & cold water',
      afternoonSnack: 'Soft hard-boiled egg slices with red pepper strips & rice crackers',
    },
    {
      name: 'Thursday',
      morningSnack: 'Crispy whole grain waffle quarters with warm apple compote & whole milk',
      lunch: 'Baked wild salmon fish cakes, mashed sweet potatoes, steamed green beans & milk',
      afternoonSnack: 'Fresh honeydew melon cubes, hummus dip & carrot coins',
    },
    {
      name: 'Friday',
      morningSnack: 'Fresh berry smoothie (spinach, banana, berries, yogurt) & whole grain biscuits',
      lunch: 'Homemade mild lentil & mild veggie stew, warm whole wheat naan & water',
      afternoonSnack: 'Sliced pears with mild mozzarella cheese strings & flax crackers',
    },
  ];

  return (
    <section id="nutrition" className="pt-8 pb-16 sm:pt-10 sm:pb-24 bg-white relative overflow-hidden">
      {/* Large transparent icon on the right of page titles starting right top corner */}
      <PageWatermarkIcon icon={Utensils} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-brand font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1F3A2C] tracking-tight leading-[1.12]">
            Wholesome, Homemade Nutrition
          </h2>
          <p className="mt-6 sm:mt-7 text-base sm:text-lg text-[#4E6656] leading-relaxed">
            Good food fuels joyful play and healthy brains. Every meal and snack is prepared fresh using wholesome ingredients inspired by{' '}
            <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#FDE68A] shadow-2xs">
              Canada’s Food Guide
            </span>
            .
          </p>
          <PageSubtitleBanner />
        </div>

        {/* Content Grid: Unboxed Layout Directly on White Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Weekly Menu Planner with Vertical Days (Unboxed) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#E5DCCB] pb-4">
              <h3 className="font-brand font-bold text-2xl text-[#1F3A2C]">
                Sample Weekly Menu
              </h3>
              <p className="text-xs text-[#63806F] mt-1">
                Menus rotate seasonally every 4 weeks to keep meals exciting and balanced.
              </p>
            </div>

            {/* Vertical Days Selector on the Left & Meal Items on the Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Vertical Day Selector */}
              <div className="md:col-span-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                <div className="text-[11px] font-bold text-[#73927F] uppercase tracking-wider hidden md:block mb-1">
                  Select Weekday:
                </div>
                {days.map((d, index) => (
                  <button
                    key={d.name}
                    onClick={() => setSelectedDay(index)}
                    className={`px-4 py-2.5 text-xs font-bold transition-all text-left flex items-center justify-between cursor-pointer shrink-0 ${
                      selectedDay === index
                        ? 'bg-[#2E5A44] text-white shadow-xs rounded-[14px_6px_14px_6px]'
                        : 'bg-[#FFFBEB] text-[#587262] border border-[#FDE68A] hover:text-[#1F3A2C] hover:bg-[#FEF3C7] rounded-[14px_6px_14px_6px]'
                    }`}
                  >
                    <span>{d.name}</span>
                    {selectedDay === index && <span className="hidden md:inline font-bold">→</span>}
                  </button>
                ))}
              </div>

              {/* Meals for Selected Day (Playful Pastel Cards with Organic Shapes) */}
              <div className="md:col-span-8 space-y-3.5">
                <div className="text-xs font-bold text-[#EA580C] uppercase tracking-wider">
                  {days[selectedDay].name}’s Fresh Menu:
                </div>

                {/* Morning Snack (Buttercup Pastel Card) */}
                <div className="p-4 sm:p-5 rounded-[26px_12px_26px_12px] bg-[#FFFBEB] border-2 border-[#FDE68A] shadow-xs space-y-1 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-xs font-bold text-[#92400E]">
                    <span className="flex items-center gap-1.5">
                      <Apple className="w-4 h-4 text-[#D97706]" />
                      <span>Morning Snack (8:45 AM)</span>
                    </span>
                    <span className="text-[11px] font-bold bg-white px-2.5 py-0.5 rounded-full border border-[#FDE68A] text-[#92400E] shadow-2xs">Fruit & Grain</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2E4738] font-medium pt-1 leading-relaxed">
                    {days[selectedDay].morningSnack}
                  </p>
                </div>

                {/* Lunch (Mint Pastel Card) */}
                <div className="p-4 sm:p-5 rounded-[12px_26px_12px_26px] bg-[#F0FDF4] border-2 border-[#86EFAC] shadow-xs space-y-1 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-xs font-bold text-[#166534]">
                    <span className="flex items-center gap-1.5">
                      <Utensils className="w-4 h-4 text-[#16A34A]" />
                      <span>Hot Lunch (11:45 AM)</span>
                    </span>
                    <span className="text-[11px] font-bold bg-white px-2.5 py-0.5 rounded-full border border-[#86EFAC] text-[#166534] shadow-2xs">Main & Veggies</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1F3A2C] font-semibold pt-1 leading-relaxed">
                    {days[selectedDay].lunch}
                  </p>
                </div>

                {/* Afternoon Snack (Peach Pastel Card) */}
                <div className="p-4 sm:p-5 rounded-[26px_12px_26px_12px] bg-[#FFF7ED] border-2 border-[#FED7AA] shadow-xs space-y-1 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between text-xs font-bold text-[#9A3412]">
                    <span className="flex items-center gap-1.5">
                      <Apple className="w-4 h-4 text-[#EA580C]" />
                      <span>Afternoon Snack (2:45 PM)</span>
                    </span>
                    <span className="text-[11px] font-bold bg-white px-2.5 py-0.5 rounded-full border border-[#FED7AA] text-[#9A3412] shadow-2xs">Protein & Crunch</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2E4738] font-medium pt-1 leading-relaxed">
                    {days[selectedDay].afternoonSnack}
                  </p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-[18px_8px_18px_8px] bg-[#F0F9FF] border-2 border-[#7DD3FC] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-bold text-[#0369A1] shadow-2xs">
              <span>💧 Fresh filtered water offered continuously all day</span>
              <span>🥛 Organic milk / oat milk provided</span>
            </div>
          </div>

          {/* Right Column: Photo & Food Standards (Playful Pastel Layout) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div className="rounded-[36px_18px_36px_18px] overflow-hidden shadow-lg aspect-[16/11] border-4 border-[#FFFBEB] ring-4 ring-[#86EFAC]/40">
              <img
                src={healthyLunchImage}
                alt="Healthy toddler lunch with fresh fruit, cucumbers, and whole grains"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-7 rounded-[34px_16px_34px_16px] bg-[#FAF8F5] border-3 border-[#E5DCCB] space-y-4 shadow-xs">
              <h3 className="font-brand font-bold text-lg text-[#1F3A2C] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#16A34A]" />
                <span>Our Food Standards</span>
              </h3>
              
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 p-3 rounded-[16px_6px_16px_6px] bg-[#FFF1F2] border border-[#FECDD3] text-[#9F1239]">
                  <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span><strong>Strictly Nut-Free:</strong> 100% peanut and tree-nut free facility.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-[6px_16px_6px_16px] bg-[#F0FDF4] border border-[#86EFAC] text-[#166534]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Fresh Produce:</strong> Fresh fruit and raw/steamed vegetables served at every single meal.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-[16px_6px_16px_6px] bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E]">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span><strong>Zero Added Refined Sugars:</strong> Naturally sweetened with fruits and whole foods.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-[6px_16px_6px_16px] bg-[#F0F9FF] border border-[#7DD3FC] text-[#0369A1]">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span><strong>Allergies & Sensitivities:</strong> We happily accommodate dairy-free, vegetarian, or gluten-conscious diets.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
