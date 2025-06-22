import React, { useState } from 'react';
import { Check, ChevronDown, MapPin } from 'lucide-react';
import Image from 'next/image';


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
    <div className="bg-gray-900  text-white px-4 sm:px-6 md:px-8 py-6 rounded-b-2xl -mt-1 border border-t-8 border-t-gray-900 rounded-t-2xl mx-4 sm:mx-6 md:mx-8 lg:-mx-4">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-600 flex-shrink-0 border-4 border-white">
          <Image
  src={user.avatar}
  alt={user.name}
  width={128}
  height={128}
  className="w-full h-full object-cover"
/>

          </div>

          <div className="flex flex-col text-center sm:text-left items-center sm:items-start w-full">
            {/* User Info */}
            <div className="mb-4">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                <h1 className="text-2xl sm:text-3xl font-semibold">{user.name}</h1>
                <Check className="text-green-200  w-5 h-5" />
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-1 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{user.location}</span>
              </div>
            </div>

            {/*  Mobile Dropdown Tabs */}
            <div className="w-full sm:w-auto block md:hidden mb-4">
              <select
                value={activeTab}
                onChange={(e) => onTabChange(e.target.value)}
                className="w-full bg-gray-800 text-white text-sm rounded-lg border border-gray-700 px-3 py-2"
              >
                {headerTabs.map((tab) => (
                  <option key={tab} value={tab}>
                    {tab}
                  </option>
                ))}
              </select>
            </div>

            {/*  Desktop Tabs */}
            <div className="hidden md:flex space-x-8">
              {headerTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => onTabChange(tab)}
                  className={`pb-2 text-sm font-medium relative ${
                    activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

  
        <div className="flex flex-col sm:items-end items-center gap-3 text-right w-full md:w-auto">
          {/* Role Dropdown */}
          <div className="relative w-full sm:w-auto text-center sm:text-right">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center sm:justify-end space-x-2 text-sm font-medium text-white hover:text-gray-300 transition-colors w-full sm:w-auto"
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

          <button className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors w-full sm:w-auto">
            BOOK NOW
          </button>

          <div className="text-center sm:text-right">
            <div className="text-lg font-semibold">
              $100-$400
              <span className="text-sm text-gray-400 ml-2 text-nowrap">per group workshop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
