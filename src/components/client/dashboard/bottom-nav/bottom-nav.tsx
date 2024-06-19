'use client';

import { useState } from 'react';

import BottomButton from '@/components/client/ui/bottom-button';

import { PageName } from '@/models/types';

const BottomNav: React.FC = () => {
  const [activePage, setActivePage] = useState<PageName>('home');

  return (
    <>
      <div className="relative flex cursor-pointer items-center justify-center rounded-full border border-t-light-4 p-2 text-16 font-semibold text-white hover:bg-t-light-8">
        <BottomButton page="home" isActive={activePage === 'home'} shifted={false} z={3} onClick={setActivePage} />
        <BottomButton page="assets" isActive={activePage === 'assets'} shifted={true} z={2} onClick={setActivePage} />
        <BottomButton
          page="activity"
          isActive={activePage === 'activity'}
          shifted={true}
          z={1}
          onClick={setActivePage}
        />
      </div>
    </>
  );
};

BottomNav.displayName = 'BottomNav';

export default BottomNav;
