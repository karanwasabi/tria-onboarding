import BottomNav from '@/components/client/dashboard/bottom-nav';
import CryptoContainer from '@/components/server/dashboard/crypto-container';
import Header from '@/components/server/dashboard/header';
import SummaryCard from '@/components/server/dashboard/summary-card';

export default async function DashboardPage() {
  return (
    <>
      <div className="relative flex w-full flex-wrap items-start justify-center overflow-hidden rounded-20 bg-t-black-gradient">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-10 aspect-square h-full w-full overflow-hidden object-cover opacity-40"
        >
          <source src="/videos/logo-bg.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 flex w-full flex-col items-center justify-start px-4">
          <Header />
          <SummaryCard />
        </div>
      </div>

      <div className="relative z-20 flex w-full grow flex-col items-center justify-start bg-t-dashboard-black px-4 py-5">
        <CryptoContainer />
      </div>

      <div className="relative z-20 flex w-full flex-col items-center justify-center bg-t-dashboard-black px-4 py-2">
        <BottomNav />
      </div>
    </>
  );
}
