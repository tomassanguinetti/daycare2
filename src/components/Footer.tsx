import React from 'react';
import { TurtleMascot } from './TurtleMascot';
import { MapPin, Phone, Mail, Clock, Heart, Shield } from 'lucide-react';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <footer className="bg-[#2D5A40] text-white pt-16 pb-12 border-t border-[#3F6F52]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24 2xl:px-32">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <TurtleMascot size={48} variant="happy" className="group-hover:scale-105 transition-transform" />
              <div>
                <span className="font-brand font-bold text-2xl text-white tracking-tight">
                  Tiny Turtles
                </span>
                <span className="block text-xs uppercase tracking-wider text-[#A7D8B5] font-semibold">
                  Home Daycare · Orléans, Ottawa
                </span>
              </div>
            </button>

            <p className="text-sm text-[#D1E6D8] leading-relaxed max-w-sm">
              A gentle, nurturing home childcare environment dedicated to infants and toddlers in Orléans. Encouraging early development through warm relationships, unhurried outdoor exploration, and wholesome nutrition.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#B5DEC2]">
              <Shield className="w-4 h-4 text-[#E28448]" />
              <span>Standard First Aid & CPR-C Certified · Police VSC Cleared</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-brand font-bold text-sm uppercase tracking-wider text-[#A7D8B5]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#D1E6D8]">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-semibold"
                >
                  Our Programs & Daily Life
                </button>
              </li>
              <li className="pl-3 border-l border-[#A7D8B5]/40 space-y-1.5 my-1">
                <div>
                  <button
                    onClick={() => onNavigate('routine')}
                    className="hover:text-white text-xs text-[#BFE3CB] transition-colors cursor-pointer text-left"
                  >
                    · Daily Rhythm & Routine
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => onNavigate('nutrition')}
                    className="hover:text-white text-xs text-[#BFE3CB] transition-colors cursor-pointer text-left"
                  >
                    · Homemade Meals & Nutrition
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => onNavigate('rates')}
                    className="hover:text-white text-xs text-[#BFE3CB] transition-colors cursor-pointer text-left"
                  >
                    · Rates, Hours & CRA Receipts
                  </button>
                </div>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('spaces')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Photo Tour of Our Spaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Parent Reviews & Feedback
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inquire')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-xs text-[#A7D8B5]"
                >
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info & Tour Action */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-brand font-bold text-sm uppercase tracking-wider text-[#A7D8B5]">
              Contact & Location
            </h4>
            
            <div className="space-y-2.5 text-sm text-[#D1E6D8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E28448] shrink-0 mt-1" />
                <span>Fallingbrook / Avalon, Orléans, Ottawa, ON</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E28448] shrink-0" />
                <span>Monday – Friday: 7:30 AM – 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E28448] shrink-0" />
                <a href="tel:5555550123" className="hover:text-white">
                  (555) 555-0123
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E28448] shrink-0" />
                <a href="mailto:contact@tinyturtlesdaycare.com" className="hover:text-white">
                  contact@tinyturtlesdaycare.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBookingModal}
                className="w-full py-2.5 px-4 text-xs font-bold text-[#1F3A2C] bg-[#A7D8B5] hover:bg-white rounded-full transition-colors cursor-pointer text-center"
              >
                Inquire About Openings / Book a Tour
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#95C2A4]">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Tiny Turtles Home Daycare. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Licensed Childcare in Orléans, Ontario</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-[#E28448] fill-[#E28448]" /> for Ottawa families
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
