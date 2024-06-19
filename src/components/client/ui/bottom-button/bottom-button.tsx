'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { textUtils } from '@/lib/text-utils';
import { PageName } from '@/models/types';

interface IBottomButton {
  page: PageName;
  isActive: boolean;
  shifted: boolean;
  z: 1 | 2 | 3;
  onClick: (page: PageName) => void;
}

const BottomButton: React.FC<IBottomButton> = ({ page, isActive, shifted, z, onClick }) => {
  return (
    <>
      <button
        key={`bottom-button-${page}`}
        className={clsx(
          // base styles
          `flex cursor-pointer items-center justify-center gap-1 rounded-full border p-2 text-16 font-semibold text-white`,

          // active
          isActive && `bg-t-nav-black border-t-light-16`,

          // inactive
          !isActive && `border-t-light-8 bg-t-dark`,

          // shifted
          shifted && `-ml-1`,

          // z-index
          z === 1 && `z-10`,
          z === 2 && `z-20`,
          z === 3 && `z-30`
        )}
        onClick={() => onClick(page)}
      >
        <Image src={`svgs/dashboard/icon-${page}.svg`} height={24} width={24} alt={page} />
        {isActive && <>{textUtils.toSafeTitleCase(page)}</>}
      </button>
    </>
  );
};

BottomButton.displayName = 'BottomButton';

export default BottomButton;
