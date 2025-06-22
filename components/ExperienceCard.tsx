// components/ExperienceCard.tsx
import React from 'react';
import { MapPin, CalendarDays, ChevronRight } from 'lucide-react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ExperienceCardProps {
  post: Post;
  index: number;
  onClick: (post: Post) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ post, index, onClick }) => {
  const getCardData = (index: number) => {
    const cardData = [
      {
        badge: 'S',
        title: 'Studio Artist',
        program: 'Sarasota Opera Young Artist Program',
        location: 'Sarasota Opera',
        date: 'Oct-2017',
      },
      {
        badge: 'C',
        title: 'Creative Director',
        program: 'Sarasota Opera Creative Director Program',
        location: 'St. Petersburg Opera..',
        date: 'Oct-2018 to Nov 2018',
      },
    ];
    return cardData[index] || cardData[0];
  };

  const cardData = getCardData(index);

  return (
    <div
      onClick={() => onClick(post)}
      className="relative bg-white border border-gray-200 rounded-lg shadow-lg p-6 min-h-[144px] hover:shadow-xl transition-shadow cursor-pointer w-full"
    >
      <div className="flex items-start space-x-4 w-full">
        {/* Badge */}
        <div className="w-12 h-12 mt-[28px] bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 text-lg">
          {cardData.badge}
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1 -ml-[66px]">Young Artist Program | Program</div>
              <div className="leading-3">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{cardData.title}</h3>
                <p className="text-gray-600 mb-3">{cardData.program}</p>
              </div>
              <div className="flex -ml-16 mt-6 items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{cardData.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top-right Chevron Icon */}
      <div className="absolute top-4 right-4">
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>

      {/* Bottom-right Calendar & Date */}
      <div className="absolute bottom-4 right-4 flex items-center text-sm text-gray-500">
        <CalendarDays className="w-4 h-4 mr-1" />
        <span className="whitespace-nowrap">{cardData.date}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
