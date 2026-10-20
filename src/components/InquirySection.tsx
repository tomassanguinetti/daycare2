import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, Send, CheckCircle2, Clock, Sparkles, HelpCircle } from 'lucide-react';
import { TurtleMascot } from './TurtleMascot';
import { PageSubtitleBanner } from './PageSubtitleBanner';
import { PageWatermarkIcon } from './PageWatermarkIcon';
import { FAQSection } from './FAQSection';

export const InquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    startDate: '',
    careType: 'fulltime',
    preferredTourTime: 'morning',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childName: '',
      childAge: '',
      startDate: '',
      careType: 'fulltime',
      preferredTourTime: 'morning',
      notes: '',
    });
  };

  return (
    <section id="inquire" className="pt-8 pb-16 sm:pt-10 sm:pb-24 bg-white relative overflow-hidden">
      {/* Large transparent icon on the right of page titles starting right top corner */}
      <PageWatermarkIcon icon={Calendar} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Reassurance & Direct Contact (Unboxed) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="mb-3">
              <TurtleMascot size={42} variant="waving" />
            </div>

            <h2 className="font-brand font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1F3A2C] tracking-tight leading-[1.12]">
              Check Availability & Schedule a Tour
            </h2>

            <p className="mt-6 sm:mt-7 text-base text-[#3E5848] leading-relaxed">
              Spots in our small-group home daycare fill quickly. Fill out the form to inquire about upcoming{' '}
              <span className="bg-[#FEF3C7] text-[#92400E] px-2.5 py-0.5 rounded-lg font-bold inline-block border border-[#FDE68A] shadow-2xs">
                infant and toddler openings
              </span>{' '}
              or arrange an in-person tour of our playroom and outdoor yard in Orléans.
            </p>

            <PageSubtitleBanner />

            {/* Direct Contact Items (Playful Pastel Cards) */}
            <div className="space-y-3.5 pt-2 border-t border-[#E5DCCB]">
              <div className="flex items-center gap-4 p-4 rounded-[24px_10px_24px_10px] bg-[#F0FDF4] border-2 border-[#86EFAC] shadow-2xs hover:scale-102 transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-white text-[#166534] flex items-center justify-center shrink-0 border border-black/5 shadow-2xs">
                  <Phone className="w-5 h-5 text-[#16A34A]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#166534]">Call or Text Us</div>
                  <a href="tel:5555550123" className="text-base font-bold text-[#1F3A2C] hover:text-[#16A34A]">
                    (555) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[10px_24px_10px_24px] bg-[#FFFBEB] border-2 border-[#FDE68A] shadow-2xs hover:scale-102 transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-white text-[#D97706] flex items-center justify-center shrink-0 border border-black/5 shadow-2xs">
                  <Mail className="w-5 h-5 text-[#D97706]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#92400E]">Email Us Directly</div>
                  <a href="mailto:contact@tinyturtlesdaycare.com" className="text-base font-bold text-[#1F3A2C] hover:text-[#D97706]">
                    contact@tinyturtlesdaycare.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[24px_10px_24px_10px] bg-[#F0F9FF] border-2 border-[#7DD3FC] shadow-2xs hover:scale-102 transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-white text-[#0284C7] flex items-center justify-center shrink-0 border border-black/5 shadow-2xs">
                  <MapPin className="w-5 h-5 text-[#0284C7]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#0369A1]">Location</div>
                  <div className="text-sm sm:text-base font-bold text-[#1F3A2C]">
                    Orléans, Ottawa, ON (Fallingbrook / Avalon)
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="p-3.5 rounded-[18px_8px_18px_8px] bg-[#FFF7ED] border-2 border-[#FED7AA] flex items-center gap-3 text-xs text-[#9A3412] font-semibold shadow-2xs">
              <Clock className="w-4 h-4 text-[#EA580C] shrink-0" />
              <span>We personally respond to all parent inquiries within 24 business hours.</span>
            </div>

            {/* Jump to FAQs prompt */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full p-4 rounded-[20px_10px_20px_10px] bg-[#F0F9FF] border-2 border-[#7DD3FC] hover:bg-[#E0F2FE] transition-all flex items-center justify-between text-left group cursor-pointer shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white text-[#0284C7] flex items-center justify-center shrink-0 border border-black/5 shadow-2xs">
                    <HelpCircle className="w-4 h-4 text-[#0284C7]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#0369A1]">Have Questions First?</span>
                    <span className="block text-xs text-[#0C4A6E]">Read our FAQs section below ↓</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#0284C7] group-hover:translate-y-0.5 transition-transform">
                  Jump to FAQ ↓
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success Card in Playful Container */}
          <div className="lg:col-span-7 lg:pl-4">
            <div className="p-6 sm:p-8 rounded-[36px_16px_36px_16px] bg-[#FAF8F5] border-3 border-[#E5DCCB] shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#166534] mx-auto flex items-center justify-center border-2 border-[#86EFAC] shadow-xs">
                  <CheckCircle2 className="w-9 h-9 text-[#16A34A]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-brand font-bold text-2xl text-[#1F3A2C]">
                    Thank You, {formData.parentName || 'Parent'}!
                  </h3>
                  <p className="text-sm text-[#4E6656] max-w-md mx-auto leading-relaxed">
                    Your inquiry for <strong>{formData.childName || 'your child'}</strong> has been received with love. Jane will review our current enrollment and get in touch with you at <strong>{formData.email}</strong> to coordinate your home tour.
                  </p>
                </div>

                <div className="bg-[#FFFBEB] rounded-[22px_10px_22px_10px] p-5 max-w-md mx-auto text-left text-xs text-[#78350F] space-y-1.5 border-2 border-[#FDE68A] shadow-2xs">
                  <div className="font-bold text-[#1F3A2C] mb-1">Inquiry Summary:</div>
                  <div>· Care: {formData.careType === 'fulltime' ? 'Full-Time (Mon–Fri)' : 'Part-Time'}</div>
                  <div>· Desired Start Date: {formData.startDate || 'As soon as possible'}</div>
                  <div>· Preferred Tour Window: {formData.preferredTourTime === 'morning' ? 'Morning (9:30 AM)' : 'Late Afternoon (4:30 PM)'}</div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-[#2E5A44] hover:bg-[#234534] rounded-full transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="border-b border-[#E5DCCB] pb-3">
                  <h3 className="font-brand font-bold text-xl text-[#1F3A2C]">
                    Childcare Inquiry Form
                  </h3>
                  <p className="text-xs text-[#688673]">
                    Please share a few details so we can best assist your family.
                  </p>
                </div>

                {/* Parent Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marie Dupont"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marie@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Child Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (613) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                      Child’s Name & Current Age *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lucas, 14 months"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Start Date & Care Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                      Target Start Date *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. September 2026 or Immediate"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                      Schedule Needed *
                    </label>
                    <select
                      value={formData.careType}
                      onChange={(e) => setFormData({ ...formData, careType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299] focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="fulltime">Full-Time (Mon–Fri, 5 days)</option>
                      <option value="parttime-4">Part-Time (4 days / week)</option>
                      <option value="parttime-3">Part-Time (3 days / week)</option>
                      <option value="waitlist">Waitlist for future date</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Tour Time */}
                <div>
                  <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                    Preferred Tour Window
                  </label>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <label
                      className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                        formData.preferredTourTime === 'morning'
                          ? 'border-[#2E5A44] bg-[#2E5A44] font-bold text-white'
                          : 'border-[#E5DCCB] bg-white text-[#557160]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="tourTime"
                        value="morning"
                        checked={formData.preferredTourTime === 'morning'}
                        onChange={() => setFormData({ ...formData, preferredTourTime: 'morning' })}
                        className="hidden"
                      />
                      <span>Morning Visit (9:30 AM)</span>
                    </label>

                    <label
                      className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                        formData.preferredTourTime === 'afternoon'
                          ? 'border-[#2E5A44] bg-[#2E5A44] font-bold text-white'
                          : 'border-[#E5DCCB] bg-white text-[#557160]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="tourTime"
                        value="afternoon"
                        checked={formData.preferredTourTime === 'afternoon'}
                        onChange={() => setFormData({ ...formData, preferredTourTime: 'afternoon' })}
                        className="hidden"
                      />
                      <span>Afternoon Visit (4:45 PM)</span>
                    </label>
                  </div>
                </div>

                {/* Additional notes */}
                <div>
                  <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                    Questions, Allergies, or Special Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your child's favorite activities, sleep habits, or any questions you have for Jane..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#E28448] hover:bg-[#CF7237] active:scale-[0.99] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Sending...' : 'Send'}</span>
                </button>

                <p className="text-[11px] text-center text-[#73927F]">
                  🔒 Your information is private and will only be used to contact you regarding Tiny Turtles Home Daycare.
                </p>
              </form>
            )}
            </div>
          </div>

        </div>

        {/* 2. Frequently Asked Questions Section (Integrated Directly on Contact Page) */}
        <div id="faq" className="mt-20 pt-10 border-t-2 border-[#EFE7DA]">
          <FAQSection />
        </div>

      </div>
    </section>
  );
};
