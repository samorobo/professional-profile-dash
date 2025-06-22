import React from 'react';
import {
  Home,
  FileText,
  Play,
  Award,
  Briefcase,
  Mail,
  Calendar,
  HelpCircle,
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Home' },
  { icon: FileText, label: 'About' },
  { icon: Play, label: 'Media' },
  { icon: Award, label: 'Highlights' },
  { icon: Briefcase, label: 'Experience' },
  { icon: Mail, label: 'Gallery' },
  { icon: Mail, label: 'Messages' },
  { icon: Calendar, label: 'Calendar' },
  { icon: HelpCircle, label: 'Help' },
];

interface SidebarProps {
  activeIndex: number;
  onChange: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeIndex, onChange }) => (
  <>
    {/* Sidebar for medium and up */}
    <div className="hidden md:flex w-20 bg-white border-r border-gray-200 min-h-screen flex-col items-center py-4">
      <div className="flex flex-col gap-2 mt-2">
        {sidebarItems.map((item, idx) => (
          <button
            key={item.label}
            className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors group relative ${
              activeIndex === idx
                ? 'bg-gray-500 text-white rounded-3xl'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
            }`}
            onClick={() => onChange(idx)}
          >
            <item.icon className="w-6 h-6" />
            <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>

    {/* Bottom nav for small screens */}
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50">
      {sidebarItems.slice(0, 5).map((item, idx) => (
        <button
          key={item.label}
          className={`flex flex-col items-center justify-center text-xs ${
            activeIndex === idx
              ? 'text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onChange(idx)}
        >
          <item.icon className="w-5 h-5 mb-0.5" />
          {item.label}
        </button>
      ))}
    </div>
  </>
);

export default Sidebar;
