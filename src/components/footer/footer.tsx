import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex w-full items-center justify-center p-3 opacity-60">
        <Image src={`/svgs/tria-footer.svg`} alt="Tria Footer Logo" width={20} height={20} />
        <p className="text-14 pl-2.5 font-semibold text-t-gray">Powered by Tria</p>
      </footer>
    </>
  );
};

Footer.displayName = 'Footer';

export default Footer;
