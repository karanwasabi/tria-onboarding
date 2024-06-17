import Image from 'next/image';
import Link from 'next/link';

interface ILoginHero {
  showBackButton?: boolean;
}

const LoginHero: React.FC<ILoginHero> = ({ showBackButton = false }) => {
  return (
    <>
      <div className="relative flex aspect-square w-full flex-wrap items-center justify-center rounded-20 bg-t-black-gradient">
        <video autoPlay loop muted playsInline className="absolute inset-0 z-10 h-full w-full object-cover opacity-50">
          <source src="/videos/login-hero-bg.mp4" type="video/mp4" />
        </video>
        {showBackButton && (
          <Link
            className="absolute left-4 top-4 z-30 flex items-center justify-center rounded-xl p-3 opacity-40 transition hover:cursor-pointer hover:bg-t-light-8 hover:opacity-100 active:scale-99"
            href="/"
          >
            <Image src={`/svgs/icons/icon-back.svg`} alt="Back" width={20} height={20} />
          </Link>
        )}

        <div className="relative z-40">
          <Image src={`/images/tria-logo.webp`} alt="Tria Logo" width={93} height={93} />
          <p className="w-full pt-7 text-center text-22 font-normal text-t-light-70">
            Login to
            <br />
            <span className="font-bold">tria</span> Demo
          </p>
        </div>
      </div>
    </>
  );
};

LoginHero.displayName = 'LoginHero';

export default LoginHero;
