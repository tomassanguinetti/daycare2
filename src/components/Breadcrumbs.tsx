import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageId } from './Navbar';

interface BreadcrumbsProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

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
  inquire: 'Contact & Inquiry',
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav
      aria-label="Breadcrumb navigation"
      className="w-full bg-white border-b border-[#F0EBE1] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-2.5"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#52745E]">
        <button
          onClick={() => onNavigate('home')}
          className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
            currentPage === 'home'
              ? 'font-bold text-[#1F3A2C]'
              : 'hover:text-[#1F3A2C] text-[#52745E]'
          }`}
          aria-label="Go to Home"
        >
          <Home className="w-3.5 h-3.5 text-[#355F45]" />
          <span>Home</span>
        </button>

        {currentPage !== 'home' && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-[#9CB6A4] shrink-0" aria-hidden="true" />
            <span
              className="font-bold text-[#1F3A2C] truncate"
              aria-current="page"
            >
              {PAGE_LABELS[currentPage] || currentPage}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};
