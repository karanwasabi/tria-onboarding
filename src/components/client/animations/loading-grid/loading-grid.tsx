'use client';

import Lottie from 'lottie-react';

import LoadingGridAnimation from '@/data/lottie/loading-grid.json';

const LoadingGrid: React.FC = () => {
  return (
    <>
      <div className="h-full w-full">
        <Lottie animationData={LoadingGridAnimation} loop autoplay />
      </div>
    </>
  );
};

LoadingGrid.displayName = 'LoadingGrid';

export default LoadingGrid;
