import React, { useState } from 'react';
import { X, Calendar, Phone, Mail, CheckCircle2, Clock, MapPin, Send } from 'lucide-react';
import { TurtleMascot } from './TurtleMascot';

interface InquiryBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryBookingModal: React.FC<InquiryBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    startDate: '',
    schedule: 'fulltime',
    preferredTourDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-[36px_16px_36px_16px] max-w-xl w-full p-6 sm:p-8 shadow-2xl border-3 border-[#E5DCCB] relative my-8">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#63806F] hover:text-[#1F3A2C] hover:bg-[#EFE7DA] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#166534] mx-auto flex items-center justify-center border-2 border-[#86EFAC] shadow-xs">
              <CheckCircle2 className="w-9 h-9 text-[#16A34A]" />
            </div>

            <h3 className="font-brand font-bold text-2xl text-[#1F3A2C]">
              Tour Request Received!
            </h3>

            <p className="text-sm text-[#4E6656] leading-relaxed">
              Thank you, <strong>{formData.parentName}</strong>. We are thrilled to learn about <strong>{formData.childName || 'your little one'}</strong>. Jane will get back to you via email or text at <strong>{formData.phone || formData.email}</strong> within 24 hours to confirm your visit.
            </p>

            <div className="p-4 bg-[#FFFBEB] rounded-[22px_10px_22px_10px] text-left text-xs text-[#78350F] space-y-1.5 border-2 border-[#FDE68A] shadow-2xs">
              <div className="font-bold text-[#1F3A2C]">Next Steps:</div>
              <div>1. We will verify current spot availability for your target date ({formData.startDate || 'flexible'}).</div>
              <div>2. You’ll receive our exact residential street address in Orléans and directions.</div>
              <div>3. You and your child will visit for a warm 30-minute play & tour session!</div>
            </div>

            <button
              onClick={handleClose}
              className="mt-2 px-6 py-2.5 bg-[#2E5A44] hover:bg-[#234534] text-white text-xs font-bold rounded-full transition-colors cursor-pointer"
            >
              Close & Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TurtleMascot size={40} variant="happy" />
              <div>
                <h3 className="font-brand font-bold text-xl sm:text-2xl text-[#1F3A2C]">
                  Book a Tour / Check Availability
                </h3>
                <p className="text-xs text-[#688673]">
                  Tiny Turtles Home Daycare · Orléans, Ottawa
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Smith"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (555) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                    Child's Name & Age *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Noah, 18 mos"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                    Desired Start Date *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. June 2026 or Sept 2026"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                    Care Needed
                  </label>
                  <select
                    value={formData.schedule}
                    onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299] cursor-pointer"
                  >
                    <option value="fulltime">Full-Time (Mon–Fri 7:30–5:00)</option>
                    <option value="parttime-4">Part-Time (4 Days / Week)</option>
                    <option value="parttime-3">Part-Time (3 Days / Week)</option>
                    <option value="waitlist">Waitlist for upcoming year</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F3A2C] mb-1">
                  Preferred Tour Date / Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="Any particular weekday morning/afternoon that works best for you?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-[#D6CDBC] bg-white focus:outline-none focus:ring-2 focus:ring-[#8AC299] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 text-sm font-bold text-white bg-[#E28448] hover:bg-[#CF7237] rounded-full shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting...' : 'Request Tour & Check Spot'}</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-[#73927F] flex items-center justify-center gap-1">
                <span>Direct inquiry to provider Jane Doe</span>
                <span aria-hidden="true">·</span>
                <span>(555) 555-0123</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
