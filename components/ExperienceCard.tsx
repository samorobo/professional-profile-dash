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
        location: 'St. Petersburg Opera',
        date: 'Oct-2018 to Nov 2018',
      },
    ];
    return cardData[index] || cardData[0];
  };

  const cardData = getCardData(index);

  return (
    <div
      onClick={() => onClick(post)}
      className="relative bg-white border border-gray-200 rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow cursor-pointer w-full"
    >
      <div className="flex items-start gap-4">
        {/* Badge */}
        <div className="w-12 h-12 mt-6 sm:mt-[28px] bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {cardData.badge}
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <div className="text-sm text-gray-500 mb-1 sm:-ml-16">Young Artist Program | Program</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{cardData.title}</h3>
          <p className="text-gray-600 mb-2">{cardData.program}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500 sm:-ml-16 mt-2">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{cardData.location}</span>
          </div>
        </div>
      </div>

      {/* Chevron Top-Right */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>

      {/* Date Bottom-Right */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center text-sm text-gray-500">
        <CalendarDays className="w-4 h-4 mr-1" />
        <span>{cardData.date}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
