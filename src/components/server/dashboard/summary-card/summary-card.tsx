import Image from 'next/image';
import Button from '../../ui/button';

const SummaryCard: React.FC = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center rounded-xl bg-t-dashboard-black transition hover:bg-t-dark-highlight">
        <div className="bg-t-summary-card flex h-48 w-full flex-wrap items-start justify-start rounded-xl bg-cover p-4">
          <div className="flex w-full items-center justify-start gap-2">
            <div className="text-16 font-semibold text-t-light-70">Assets Up</div>
            <div className="bg-t-highlight-green text-t-positive-green rounded-3xl px-2 py-0.5 text-14 font-semibold">
              +2.5%
            </div>
          </div>
          <div className="flex w-full items-center justify-start gap-2 pb-5">
            <div className="text-36 font-semibold text-white">$1838.83</div>
            <div className="t-clickable-with-bg group/refresh flex size-8 items-center justify-center">
              <Image
                className="select-none opacity-40 transition group-hover/refresh:opacity-100"
                src={`svgs/dashboard/icon-refresh.svg`}
                height={18}
                width={18}
                alt="Refresh"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-start gap-4">
            <Button variant="arrow" centered={true}>
              <Image className="select-none" src={`svgs/dashboard/icon-buy.svg`} height={24} width={24} alt="Buy" />
              Buy
            </Button>
            <Button variant="arrow" centered={true}>
              <Image className="select-none" src={`svgs/dashboard/icon-send.svg`} height={24} width={24} alt="Send" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

SummaryCard.displayName = 'SummaryCard';

export default SummaryCard;
