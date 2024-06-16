import Image from 'next/image';

const LoginHero: React.FC = () => {
  return (
    <>
      <div className="flex aspect-square w-full flex-wrap content-center items-center justify-center rounded-20 bg-t-black-gradient">
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
