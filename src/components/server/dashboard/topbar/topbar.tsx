const Topbar: React.FC = () => {
  return (
    <>
      <div className="-top-8.5 absolute z-10">
        <svg
          className="group"
          width="112"
          height="33"
          viewBox="0 0 112 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="hover:fill-t-dark-highlight group-has-[g:hover]:fill-t-dark-highlight cursor-pointer fill-t-dark transition"
            d="M93 23.3143L75.7022 12.2654C63.9764 4.77552 48.9843 4.7133 37.1967 12.1056L17 24.7714L1 34H111L93 23.3143Z"
          />
          <path
            d="M1 34L17 24.7714L37.1967 12.1056C48.9843 4.7133 63.9764 4.77552 75.7022 12.2654L93 23.3143L111 34"
            stroke="#FAFAFA"
            strokeOpacity="0.08"
          />
          <g className="cursor-pointer" opacity="0.4">
            <path
              d="M61.9401 18.7125L57.0501 23.6025C56.4726 24.18 55.5276 24.18 54.9501 23.6025L50.0601 18.7125"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

Topbar.displayName = 'Topbar';

export default Topbar;
