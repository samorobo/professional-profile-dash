// pages/index.tsx
import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import ProfileHeader from '../components/ProfileHeader';
import ExperienceTabs from '../components/ExperienceTabs';
import ExperienceDetail from '../components/ExperienceDetail';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

interface DashboardProps {
  user: User | null;
}

const experienceData = [
  { id: 1, title: 'Studio Artist', body: '', userId: 1 },
  { id: 2, title: 'Creative Director', body: '', userId: 1 },
];

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [activeSidebar, setActiveSidebar] = useState(0);
  const [activeTab, setActiveTab] = useState('About');
  const [selectedExperience, setSelectedExperience] = useState<{ index: number } | null>(null);
  const [showProgramInfo, setShowProgramInfo] = useState(false);
  const [showDetailPanel, setShowDetailPanel] = useState(false);

  if (!user) {
    return (
      <Layout title="Error">
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600 text-lg">Failed to load user data.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Professional Profile Dashboard - Anthony Fernandes">
      <div className="min-h-screen bg-gray-50 flex flex-col ">
        {/* Top Nav */}
        <div className="bg-white border px-4 py-3 flex items-center justify-between  border-b-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
              A
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-700">Admin</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:flex-row">
          <Sidebar activeIndex={activeSidebar} onChange={setActiveSidebar} />
          <div className="flex-1 px-4 sm:px-6 md:px-8 py-6">
            <ProfileHeader
              user={{
                name: user.name,
                location: user.address.city + ', ' + user.address.zipcode,
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
              }}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            <div className="flex flex-col lg:flex-row gap-6 mt-8">
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Experience</h2>
                <ExperienceTabs
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  experiences={experienceData}
                  onExperienceClick={(idx) => {
                    setSelectedExperience({ index: idx });
                    setShowDetailPanel(true);
                  }}
                />
              </div>

              <div className="w-full lg:w-1/2">
                {showDetailPanel && selectedExperience !== null && (
                  <ExperienceDetail
                    experience={selectedExperience}
                    showProgramInfo={showProgramInfo}
                    onToggleProgramInfo={() => setShowProgramInfo((prev) => !prev)}
                    onCloseDetailPanel={() => setShowDetailPanel(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const userRes = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!userRes.ok) throw new Error('API request failed');
    const user: User = await userRes.json();

    return {
      props: {
        user,
      },
    };
  } catch (err) {
    console.error('Data fetch error:', err);
    return {
      props: {
        user: null,
      },
    };
  }
};

export default Dashboard;
