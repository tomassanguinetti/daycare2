/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { CurtainWipe, CurtainPhase } from './components/CurtainWipe';
import { HomeOverview } from './components/HomeOverview';
import { Programs } from './components/Programs';
import { VirtualTour } from './components/VirtualTour';
import { MeetEducator } from './components/MeetEducator';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { InquiryBookingModal } from './components/InquiryBookingModal';
import { Calendar } from 'lucide-react';

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'programs',
  'routine',
  'spaces',
  'nutrition',
  'rates',
  'reviews',
  'faq',
  'inquire',
];

const PAGE_LABELS: Record<PageId, string> = {
  home: 'Home',
  about: 'About Us & Philosophy',
  programs: 'Our Programs',
  routine: 'Daily Schedule',
  spaces: 'Our Spaces',
  nutrition: 'Meals & Nutrition',
  rates: 'Rates & Hours',
  reviews: 'Parent Reviews',
  faq: 'Frequently Asked Questions',
  inquire: 'Contact & FAQs',
};

export const resolvePageAndAnchor = (target: PageId): { page: PageId; anchor?: string } => {
  if (target === 'reviews') return { page: 'home', anchor: 'reviews' };
  if (target === 'faq') return { page: 'inquire', anchor: 'faq' };
  if (target === 'routine') return { page: 'programs', anchor: 'routine' };
  if (target === 'nutrition') return { page: 'programs', anchor: 'nutrition' };
  if (target === 'rates') return { page: 'programs', anchor: 'rates' };
  return { page: target };
};

const getInitialPage = (): PageId => {
  const hash = window.location.hash.replace(/^#/, '');
  if (VALID_PAGES.includes(hash as PageId)) {
    return resolvePageAndAnchor(hash as PageId).page;
  }
  return 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [pendingPage, setPendingPage] = useState<PageId | null>(null);
  const [curtainPhase, setCurtainPhase] = useState<CurtainPhase>('idle');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Keep a ref to the current page to safely access inside browser popstate event listeners
  const currentPageRef = useRef<PageId>(currentPage);
  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  // Main curtain wipe navigation orchestrator
  const navigateTo = (target: PageId, isHistory = false) => {
    const { page: targetPage, anchor } = resolvePageAndAnchor(target);

    if (targetPage === currentPageRef.current) {
      if (anchor) {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (curtainPhase !== 'idle') {
      return; // Do not interrupt an active transition
    }

    setPendingPage(targetPage);
    setCurtainPhase('entering');

    // Phase 1: Staggered overlapping panels sweep in across right screen
    setTimeout(() => {
      // Phase 2: Full coverage reached. Screen is 100% occluded by the core brand canvas.
      setCurtainPhase('covered');
      setCurrentPage(targetPage);

      if (!isHistory) {
        const hash = target === 'home' ? '' : `#${target}`;
        window.history.pushState(
          { page: targetPage },
          '',
          hash || window.location.pathname
        );
      }

      if (anchor) {
        // Will scroll to anchor after uncover
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }

      // Hold 70ms while occluded to allow React DOM paint to complete
      setTimeout(() => {
        // Phase 3: Fluid reveal begins. Panels sweep out in continuation of directional flow
        setCurtainPhase('exiting');

        setTimeout(() => {
          // Transition complete (~990ms total sequence)
          setCurtainPhase('idle');
          setPendingPage(null);

          if (anchor) {
            const el = document.getElementById(anchor);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 460);
      }, 70);
    }, 460);
  };

  // Browser Back / Forward button handler (popstate & hashchange)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const rawTarget = (VALID_PAGES.includes(hash as PageId) ? hash : 'home') as PageId;
      const { page: targetPage, anchor } = resolvePageAndAnchor(rawTarget);

      if (targetPage !== currentPageRef.current) {
        navigateTo(rawTarget, true);
      } else if (anchor) {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#1F3A2C] flex flex-col antialiased selection:bg-[#8AC299]/30 relative">
      {/* Top Banner Notice - Extended to Full Width of Page Including Menu */}
      <div className="w-full bg-[#2E5A44] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-[#3D7056] flex items-center justify-center gap-2 relative z-40">
        <span className="w-2 h-2 rounded-full bg-[#E28448] animate-pulse" />
        <span>
          Now Accepting Inquiries for <strong>2026/2027 Infant & Toddler Care</strong> in Orléans!
        </span>
        <button
          onClick={openBookingModal}
          className="ml-2 bg-[#FFFBEB] text-[#92400E] px-3 py-1 rounded-full font-bold hover:bg-white transition-all text-xs cursor-pointer shadow-2xs hover:scale-105"
        >
          Check Spots →
        </button>
      </div>

      {/* Main Layout Row: Sidebar Menu (Left) + Content Area (Right) */}
      <div className="flex-1 flex flex-col lg:flex-row relative">
        {/* Full-Screen Cinematic Curtain Wipe Transition Overlay */}
        <CurtainWipe
          phase={curtainPhase}
          targetPageLabel={pendingPage ? PAGE_LABELS[pendingPage] : undefined}
        />

        {/* Vertical Navigation Menu on the Left Side */}
        <Navbar
          activePage={currentPage}
          onNavigate={(page) => navigateTo(page)}
          onOpenBookingModal={openBookingModal}
        />

        {/* Main Content Area (Scrolls on the Right) */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Page Switcher with coordinated departure movement and generous blank space margins */}
          <main
          className={`flex-1 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 transition-all duration-400 ease-[cubic-bezier(0.7,0,0.25,1)] ${
            curtainPhase === 'entering'
              ? 'translate-x-2.5 opacity-90 scale-[0.998]'
              : 'translate-x-0 opacity-100 scale-100'
          }`}
        >
          {currentPage === 'home' && (
            <HomeOverview
              onNavigate={(page) => navigateTo(page)}
              onOpenBookingModal={openBookingModal}
            />
          )}

          {currentPage === 'about' && (
            <MeetEducator
              onOpenBookingModal={openBookingModal}
              onNavigate={(page) => navigateTo(page)}
            />
          )}

          {currentPage === 'programs' && (
            <Programs onOpenBookingModal={openBookingModal} />
          )}

          {currentPage === 'spaces' && (
            <VirtualTour />
          )}

          {currentPage === 'inquire' && (
            <InquirySection />
          )}
        </main>

        {/* Footer */}
        <Footer
          onNavigate={(page) => navigateTo(page)}
          onOpenBookingModal={openBookingModal}
        />
      </div>
    </div>

      {/* Booking / Tour Modal Dialog */}
      <InquiryBookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
      />

      {/* Floating Quick Action Button for Mobile screens */}
      <div className="lg:hidden fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={openBookingModal}
          className="bg-[#E28448] hover:bg-[#CF7237] active:scale-95 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2.5 cursor-pointer border-2 border-white"
          aria-label="Book a tour or check availability"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a Tour</span>
        </button>
      </div>
    </div>
  );
}
