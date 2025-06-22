import React from 'react';
import ExperienceCard from './ExperienceCard';

const tabs = [
  'All',
  'Performance',
  'Training',
  'Accolades',
  'Education',
  'Job Titles',
  'Commissions',
  'Masterclass',
];

interface ExperienceTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  experiences: any[];
  onExperienceClick: (index: number) => void;
}

const ExperienceTabs: React.FC<ExperienceTabsProps> = ({ activeTab, onTabChange, experiences, onExperienceClick }) => (
  <div>
    <div className="border-b border-gray-200 mb-6">
      <nav className="flex space-x-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`pb-3 text-sm font-medium  text-nowrap ${
              activeTab === tab ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
    <div className="flex flex-col gap-6">
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} post={exp} index={idx} onClick={() => onExperienceClick(idx)} />
      ))}
    </div>
  </div>

export default ExperienceTabs; 