import React, { useState } from 'react';
import { Check, ChevronDown, MapPin } from 'lucide-react';

const headerTabs = ['About', 'Media', 'Highlights', 'Experience'];

interface ProfileHeaderProps {
  user: { name: string; location: string; avatar: string };
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, activeTab, onTabChange }) => {
  const [selectedRole, setSelectedRole] = useState('CHURCH SINGER');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const roleOptions = ['CHURCH SINGER', 'ROCK SINGER'];

  return (
    <div className="bg-gray-900 text-white px-8 py-6 rounded-b-2xl mt-[20px] border border-t-8 border-t-gray-900 rounded-t-2xl ml-8 mr-8 ">
      <div className="flex items-start justify-between">
        {/* Left: Avatar + Info + Tabs */}
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-600 flex-shrink-0 border-4 border-white">
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col">
            {/* User Info */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-semibold">{user.name}</h1>
                <Check className="text-green-200 w-5 h-5 -ml-8" />
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{user.location}</span>
              </div>
            </div>

            {/* Header Tabs */}
            <div className="flex space-x-8">
              {headerTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => onTabChange(tab)}
                  className={`pb-3 text-sm font-medium relative ${
                    activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Dropdown + Book Now + Pricing */}
        <div className="flex flex-col items-end space-y-3 text-right">
          {/* Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              <span>{selectedRole}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700 min-w-max z-10">
                {roleOptions.map((role) => (
                  <button
                    key={role}
                    onClick={() => {
                      setSelectedRole(role);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:text-white hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors whitespace-nowrap"
                  >
                    {role}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book Now Button */}
          <button className="px-8 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
            BOOK NOW
          </button>

          {/* Pricing */}
          <div>
            <div className="text-lg font-semibold">$100-$400 <span className='text-sm text-gray-400 ml-1'>per group workshop</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
