import React, { useState } from 'react';
import { TurtleMascot } from './TurtleMascot';
import {
  Menu,
  X,
  Phone,
  Clock,
  MapPin,
  Calendar,
  Heart,
  Baby,
  Eye,
  Utensils,
  DollarSign,
  Star,
  HelpCircle,
  Send,
  ChevronRight,
  Home,
} from 'lucide-react';

export type PageId =
  | 'home'
  | 'about'
  | 'programs'
  | 'routine'
  | 'spaces'
  | 'nutrition'
  | 'rates'
  | 'reviews'
  | 'faq'
  | 'inquire';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navLinks: { id: PageId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Heart },
    { id: 'programs', label: 'Our Programs', icon: Baby },
    { id: 'spaces', label: 'Our Spaces', icon: Eye },
    { id: 'inquire', label: 'Contact', icon: Send },
  ];

  const isItemActive = (itemId: PageId) => {
    if (activePage === itemId) return true;
    if (itemId === 'home' && activePage === 'reviews') return true;
    if (itemId === 'programs' && ['routine', 'nutrition', 'rates'].includes(activePage)) return true;
    if (itemId === 'inquire' && activePage === 'faq') return true;
    return false;
  };

  const handleLinkClick = (id: PageId, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* ======================================================== */}
      {/* 1. DESKTOP VERTICAL SIDEBAR MENU (Auto-Compress to Icons) */}
      {/* ======================================================== */}
      <div className="hidden lg:block w-20 shrink-0 sticky top-0 h-screen z-30 select-none">
        <aside
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`h-full bg-white border-r border-[#E5DCCB] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-x-hidden overflow-y-auto flex flex-col justify-between ${
            isHovered
              ? 'w-72 xl:w-80 p-5 shadow-2xl absolute left-0 top-0'
              : 'w-20 py-5 px-2.5 shadow-xs'
          }`}
        >
          {/* Top: Brand Header & Mascot */}
          <div className="space-y-4">
            <button
              onClick={() => handleLinkClick('home')}
              className={`flex items-center group text-left cursor-pointer focus:outline-none transition-all ${
                isHovered ? 'gap-3 w-full px-2' : 'justify-center w-full px-0'
              }`}
              aria-label="Tiny Turtles Home Daycare Homepage"
              title="Tiny Turtles Home Daycare"
            >
              <TurtleMascot
                size={isHovered ? 44 : 38}
                className="transform group-hover:scale-105 transition-transform duration-200 shrink-0"
              />
              <div
                className={`flex flex-col transition-all duration-300 overflow-hidden whitespace-nowrap ${
                  isHovered
                    ? 'opacity-100 max-w-xs'
                    : 'opacity-0 max-w-0 pointer-events-none'
                }`}
              >
                <span className="font-brand font-bold text-2xl text-[#1F3A2C] tracking-tight group-hover:text-[#2E5A44] transition-colors leading-none">
                  Tiny Turtles
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-[#688673] uppercase mt-1">
                  Home Daycare · Orléans
                </span>
              </div>
            </button>

            {/* Vertical Menu Navigation Links */}
            <nav className="space-y-1.5 pt-2" aria-label="Vertical navigation menu">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = isItemActive(item.id);

                return (
                  <button
                    key={item.id}
                    onClick={(e) => handleLinkClick(item.id, e)}
                    title={!isHovered ? item.label : undefined}
                    className={`flex items-center text-sm font-semibold rounded-xl transition-all duration-200 group text-left cursor-pointer ${
                      isHovered
                        ? 'w-full justify-between px-3.5 py-1.5'
                        : 'w-[43px] h-[43px] mx-auto justify-center p-0'
                    } ${
                      isActive
                        ? 'bg-[#2E5A44] text-white shadow-sm'
                        : 'text-[#3A5043] hover:text-[#1F3A2C] hover:bg-[#EFE7DA]/70'
                    }`}
                  >
                    <div className={`flex items-center ${isHovered ? 'gap-3 min-w-0' : 'justify-center'}`}>
                      <div
                        style={{ width: '43px', height: '43px' }}
                        className={`w-[43px] h-[43px] rounded-xl flex items-center justify-center shrink-0 transition-all ${
                          isActive
                            ? isHovered ? 'bg-white/20 text-white' : 'text-white'
                            : 'bg-[#EFE7DA] text-[#2D5A40] group-hover:scale-105'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`transition-all duration-300 overflow-hidden whitespace-nowrap truncate ${
                          isHovered
                            ? 'opacity-100 max-w-xs'
                            : 'opacity-0 max-w-0 pointer-events-none'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {isHovered && (
                      isActive ? (
                        <span className="w-2 h-2 rounded-full bg-[#E28448] animate-pulse shadow-sm shrink-0 ml-2" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#8C9C92] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                      )
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Section: Primary CTA & Quick Contact */}
          <div className="pt-4 border-t border-[#F0EBE1] space-y-3">
            {isHovered ? (
              <button
                onClick={onOpenBookingModal}
                className="w-full py-3 px-4 text-sm font-bold text-white bg-[#E28448] hover:bg-[#CF7237] active:scale-[0.99] rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span className="truncate">Schedule a Tour</span>
              </button>
            ) : (
              <button
                onClick={onOpenBookingModal}
                title="Schedule a Tour"
                style={{ width: '43px', height: '43px' }}
                className="w-[43px] h-[43px] mx-auto rounded-xl bg-[#E28448] hover:bg-[#CF7237] active:scale-95 text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
                aria-label="Schedule a Tour"
              >
                <Calendar className="w-5 h-5" />
              </button>
            )}

            {isHovered ? (
              <div className="space-y-1.5 text-xs text-[#526B5C] transition-opacity duration-300">
                <a
                  href="tel:5555550123"
                  className="flex items-center gap-2 hover:text-[#1F3A2C] font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E28448] shrink-0" />
                  <span className="truncate">(555) 555-0123</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E28448] shrink-0" />
                  <span className="truncate">Fallingbrook / Avalon, Orléans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#E28448] shrink-0" />
                  <span className="truncate">Mon – Fri: 7:30 AM – 5:00 PM</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 pt-1 text-[#688673]">
                <a
                  href="tel:5555550123"
                  title="Call (555) 555-0123"
                  className="p-1.5 rounded-lg hover:bg-[#FAF7F2] hover:text-[#1F3A2C] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E28448]" />
                </a>
                <div
                  title="Fallingbrook / Avalon, Orléans"
                  className="p-1.5 rounded-lg hover:bg-[#FAF7F2] text-[#688673]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#E28448]" />
                </div>
                <div
                  title="Mon – Fri: 7:30 AM – 5:00 PM"
                  className="p-1.5 rounded-lg hover:bg-[#FAF7F2] text-[#688673]"
                >
                  <Clock className="w-3.5 h-3.5 text-[#E28448]" />
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* ======================================================== */}
      {/* 2. MOBILE & TABLET TOP HEADER BAR (< lg screens)         */}
      {/* ======================================================== */}
      <header className="lg:hidden sticky top-0 z-40 bg-white border-b border-[#E5DCCB] shadow-2xs">
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Left: Mobile hamburger & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-[#1F3A2C] hover:bg-[#FAF6EF] focus:outline-none focus:ring-2 focus:ring-[#2D5A40] cursor-pointer"
              aria-label="Open vertical menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2 text-left cursor-pointer"
            >
              <TurtleMascot size={36} />
              <div>
                <span className="font-brand font-bold text-lg text-[#1F3A2C] leading-none block">
                  Tiny Turtles
                </span>
                <span className="text-[10px] font-semibold text-[#688673] uppercase tracking-wider block">
                  Daycare · Orléans
                </span>
              </div>
            </button>
          </div>

          {/* Right: Quick Action Button */}
          <button
            onClick={onOpenBookingModal}
            className="px-3.5 py-2 text-xs font-bold text-white bg-[#E28448] hover:bg-[#CF7237] rounded-full shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Tour</span>
          </button>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 3. MOBILE SLIDE-OUT VERTICAL MENU (From Left Side)        */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
          />

          {/* Vertical Menu Drawer (Slides from Left) */}
          <aside className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl border-r border-[#E5DCCB] p-6 flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-left duration-250">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5DCCB]">
                <div className="flex items-center gap-2.5">
                  <TurtleMascot size={40} />
                  <div>
                    <span className="font-brand font-bold text-xl text-[#1F3A2C] leading-none block">
                      Tiny Turtles
                    </span>
                    <span className="text-[10px] font-semibold text-[#688673] uppercase tracking-wider block mt-0.5">
                      Orléans, Ottawa
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#63806F] hover:text-[#1F3A2C] hover:bg-[#FAF6EF] cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Vertical Links List */}
              <nav className="space-y-1 mt-6">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = isItemActive(item.id);

                  return (
                    <button
                      key={item.id}
                      onClick={(e) => handleLinkClick(item.id, e)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-colors text-left cursor-pointer ${
                        isActive
                          ? 'bg-[#2E5A44] text-white'
                          : 'text-[#3A5043] hover:text-[#1F3A2C] hover:bg-[#FAF6EF]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          style={{ width: '43px', height: '43px' }}
                          className={`w-[43px] h-[43px] rounded-xl flex items-center justify-center shrink-0 ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-[#EFE7DA] text-[#2D5A40] border border-[#DFD5C2]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span>{item.label}</span>
                      </div>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-[#E28448]" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#8C9C92]" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-4 mt-6 border-t border-[#E5DCCB] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3 px-4 text-sm font-bold text-white bg-[#E28448] hover:bg-[#CF7237] rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Tour</span>
              </button>

              <a
                href="tel:5555550123"
                className="w-full py-2.5 px-3 rounded-xl bg-[#FAF6EF] border border-[#E5DCCB] text-xs font-bold text-[#1F3A2C] flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#E28448]" />
                <span>Call Us: (555) 555-0123</span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
