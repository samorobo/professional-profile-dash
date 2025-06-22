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

interface ExperienceItem {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ExperienceTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  experiences: ExperienceItem[];
  onExperienceClick: (index: number) => void;
}



const ExperienceTabs: React.FC<ExperienceTabsProps> = ({ 
  activeTab, 
  onTabChange, 
  experiences, 
  onExperienceClick 
}) => (
  <div className="w-full">

    <div className="border-b border-gray-200 mb-6">
      {/* Desktop View */}
      <nav className="hidden md:flex md:space-x-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`pb-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              activeTab === tab 
                ? 'border-b-2 border-gray-900 text-gray-900' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

  
      <nav className="md:hidden">
        <div className="flex overflow-x-auto scrollbar-hide pb-3 -mb-px">
          <div className="flex space-x-6 px-4 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`pb-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 flex-shrink-0 ${
                  activeTab === tab 
                    ? 'border-b-2 border-gray-900 text-gray-900' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>


    <div className="w-full">

      <div className="hidden sm:flex sm:flex-col sm:gap-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard 
            key={idx} 
            post={exp} 
            index={idx} 
            onClick={() => onExperienceClick(idx)} 
          />
        ))}
      </div>


      <div className="flex flex-col gap-4 sm:hidden">
        {experiences.map((exp, idx) => (
          <div key={idx} className="w-full">
            <ExperienceCard 
              post={exp} 
              index={idx} 
              onClick={() => onExperienceClick(idx)} 
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceTabs;