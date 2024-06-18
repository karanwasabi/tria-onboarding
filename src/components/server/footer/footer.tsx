import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface IFooter {
  compactMode?: boolean;
}

const Footer: React.FC<IFooter> = ({ compactMode = false }) => {
  return (
    <>
      <footer className={clsx(`flex w-full items-center justify-center px-4`, compactMode ? `py-0` : `py-3`)}>
        <Link
          href={`https://tria.so`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex select-none items-center justify-center rounded-xl p-2.5 opacity-60 transition hover:cursor-pointer hover:bg-t-light-8 hover:opacity-100 active:scale-99"
        >
          <Image
            src={`/svgs/tria-footer.svg`}
            alt="Tria Footer Logo"
            width={compactMode ? 16 : 20}
            height={compactMode ? 16 : 20}
          />
          {!compactMode ? (
            <>
              <p className={`pl-2.5 text-14 font-semibold text-t-gray`}>Powered by Tria</p>
            </>
          ) : (
            <>
              <p className={`pl-1.5 pr-0.5 text-12 font-semibold text-t-gray`}>
                {compactMode ? `Open Tria` : `Powered by Tria`}
              </p>
              <Image src={`/svgs/icons/icon-arrow-diagonal.svg`} alt="" width={16} height={16} />
            </>
          )}
        </Link>
      </footer>
    </>
  );
};

Footer.displayName = 'Footer';

export default Footer;
