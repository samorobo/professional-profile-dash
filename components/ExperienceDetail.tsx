import React from 'react';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface ExperienceDetailProps {
  experience: { index: number };
  showProgramInfo: boolean;
  onToggleProgramInfo: () => void;
  onCloseDetailPanel: () => void;
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ experience, showProgramInfo, onToggleProgramInfo, onCloseDetailPanel }) => {
  if (!experience) return <div className="h-full" />;

  const detail = [
    {
      title: 'Studio Artist',
      program: 'Sarasota Opera Young Artist Program',
      date: 'Oct 2020',
      tags: ['Church Singer', 'Rock Singer'],
      programName: 'Sarasota Opera Young Artist Program',
      location: 'Sarasota Opera House, North Pineapple Ave, Sarasota, FL, USA',
      institution: 'Sarasota Opera Young Artist Program',
      position: 'Studio Artist',
    },
    {
      title: 'Creative Director',
      program: 'Sarasota Opera Creative Director Program',
      date: 'Oct 2018 - Nov 2018',
      tags: ['Director'],
      programName: 'Sarasota Opera Creative Director Program',
      location: 'St. Petersburg Opera, St. Petersburg, FL, USA',
      institution: 'Sarasota Opera Creative Director Program',
      position: 'Creative Director',
    },
  ];

  const d = detail[experience.index] || detail[0];

  return (
    <div className="flex flex-col justify-between h-full items-center mt-6 lg:mt-[112px] w-full">
  
  {/* detailed card section */}
      <div
        className="bg-gray-900 -mt-2 border border-gray-200 rounded-lg shadow-lg p-6 min-h-[144px] flex flex-col justify-between cursor-pointer w-full mb-4 relative"
        onClick={onToggleProgramInfo}
      >
        <button
          className="absolute top-2 right-2 text-white bg-gray-700 rounded-full p-1 hover:bg-gray-600 z-10"
          onClick={(e) => {
            e.stopPropagation();
            onCloseDetailPanel();
          }}
          aria-label="Close detail panel"
        >
          ×
        </button>
        <div>
          <div className="flex justify-between items-center flex-wrap gap-y-2">
            <div className="text-sm text-white uppercase">Young Artist Program | Program</div>
            <div className="flex items-center space-x-2 mr-4">
              <CalendarDays className="w-4 h-4 text-white" />
              <span className="text-sm text-white ">{d.date}</span>
            </div>
          </div>
          <div className="pt-4">
            <h2 className="text-xl font-bold mb-1 text-white">{d.title}</h2>
            <p className="text-white mb-4">{d.program}</p>
            <div className="flex gap-3 flex-wrap">
              {d.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-500 rounded-full text-sm text-white border border-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <ChevronDown
            className={`w-5 h-5 text-gray-400 mx-auto transition-transform ${showProgramInfo ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Expanded Program Info */}
      {showProgramInfo && (
        <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-gray-900 shadow-lg w-full mt-4 lg:-mt-28 border-b-2 border-b-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Program Info</h3>
          <div className="space-y-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Name of the Program</p>
              <p className="font-medium">{d.programName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Young Artist Program</p>
              <p className="font-medium">{d.programName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-medium">{d.location}</p>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Institution Info</h3>
          <p className="text-xs text-gray-500 font-normal">Name of the institute</p>
          <p className="font-medium mb-6">{d.institution}</p>

          <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Study Info</h3>
          <p className="text-xs text-gray-500 font-normal">Position</p>
          <p className="font-medium">{d.position}</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceDetail;
