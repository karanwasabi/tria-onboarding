import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex w-full items-center justify-center px-4 py-3">
        <div className="flex items-center justify-center rounded-xl p-2.5 opacity-60 transition hover:cursor-pointer hover:bg-t-light-8 hover:opacity-100">
          <Image src={`/svgs/tria-footer.svg`} alt="Tria Footer Logo" width={20} height={20} />
          <p className="text-14 pl-2.5 font-semibold text-t-gray">Powered by Tria</p>
        </div>
      </footer>
    </>
  );
};

Footer.displayName = 'Footer';

export default Footer;
