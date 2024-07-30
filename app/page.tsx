import MainContent from '@/components/screens/dashboard/MainContent';
import SideToolBar from '@/components/screens/dashboard/SideToolBar';
import TopToolBar from '@/components/screens/dashboard/TopToolBar';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <TopToolBar />
      <div className="grid grid-cols-1 md:grid-cols-6 md:mt-[0.2rem] mt-1 gap-0 flex-1">
        <div className="md:col-span-5 mb-1">
          <MainContent />
        </div>
        <SideToolBar />
      </div>
    </div>
  );
};

export default HomePage;
