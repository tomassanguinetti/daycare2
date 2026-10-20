import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { PageId } from './Navbar';

interface PageHeaderProps {
  badge: string;
  title: string;
  description?: string;
  onNavigate: (page: PageId) => void;
  nextPage?: {
    id: PageId;
    label: string;
  };
}

export const PageHeader: React.FC<PageHeaderProps> = () => {
  return null;
};
