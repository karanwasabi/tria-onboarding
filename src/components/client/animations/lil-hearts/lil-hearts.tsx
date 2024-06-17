'use client';

import Lottie from 'lottie-react';

import LilHeartsAnimation from '@/data/lottie/lil-hearts.json';

const LilHearts: React.FC = () => {
  return (
    <>
      <div className="h-8 w-14">
        <Lottie animationData={LilHeartsAnimation} loop autoplay height={32} width={32} />
      </div>
    </>
  );
};

LilHearts.displayName = 'LilHearts';

export default LilHearts;
