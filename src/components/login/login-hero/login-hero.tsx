import Image from 'next/image';
import Link from 'next/link';

interface ILoginHero {
  showBackButton?: boolean;
}

const LoginHero: React.FC<ILoginHero> = ({ showBackButton = false }) => {
  return (
    <>
      <div className="relative flex aspect-square w-full flex-wrap content-center items-center justify-center rounded-20 bg-t-black-gradient">
        {showBackButton && (
          <Link href="/">
            <div className="active:scale-99 absolute left-0 top-0 flex items-center justify-center rounded-xl p-3 opacity-40 transition hover:cursor-pointer hover:bg-t-light-8 hover:opacity-100">
              <Image src={`/svgs/icons/icon-back.svg`} alt="Back" width={20} height={20} />
            </div>
          </Link>
        )}

        <Image src={`/images/tria-logo.webp`} alt="Tria Logo" width={93} height={93} />
        <p className="text-22 w-full pt-7 text-center font-normal text-t-light-70">
          Login to
          <br />
          <span className="font-bold">tria</span> Demo
        </p>
      </div>
    </>
  );
};

LoginHero.displayName = 'LoginHero';

export default LoginHero;
