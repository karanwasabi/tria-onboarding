import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <>
      <div className="pl-4.5 relative z-40 flex w-full items-center justify-between pr-6 pt-7">
        <div className="t-clickable-with-bg flex select-none items-center justify-start gap-2 p-1.5">
          <Image src={`/images/dashboard/avatar.png`} alt="avatar" height={28} width={28} />
          <p className="text-t-light-80 text-16 font-semibold">thekaypo@tria</p>
          <Image src={`/svgs/dashboard/arrow-down.svg`} alt="" height={16} width={16} />
        </div>
        <div className="flex items-center justify-end gap-1">
          <div className="group/copy t-clickable-with-bg size-8 select-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
              <g
                className="opacity-40 transition group-hover/copy:opacity-80"
                stroke="#FAFAFA"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                opacity=".4"
              >
                <path d="M19 16.68v3.14c0 2.63-1.05 3.68-3.68 3.68h-3.14c-2.63 0-3.68-1.05-3.68-3.68v-3.14c0-2.63 1.05-3.68 3.68-3.68h3.14c2.63 0 3.68 1.05 3.68 3.68Z" />
                <path d="M23.5 12.18v3.14c0 2.63-1.05 3.68-3.68 3.68H19v-2.32c0-2.63-1.05-3.68-3.68-3.68H13v-.82c0-2.63 1.05-3.68 3.68-3.68h3.14c2.63 0 3.68 1.05 3.68 3.68Z" />
              </g>
            </svg>
          </div>
          <Image
            className="t-clickable select-none"
            src={`/svgs/dashboard/polygon.svg`}
            alt="polygon"
            height={32}
            width={32}
          />
        </div>
      </div>
    </>
  );
};

Header.displayName = 'Header';

export default Header;
