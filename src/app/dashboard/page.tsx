import Header from '@/components/server/dashboard/header';
import SummaryCard from '@/components/server/dashboard/summary-card';

export default async function DashboardPage() {
  return (
    <>
      <div className="relative flex aspect-square w-full flex-wrap items-start justify-center rounded-20 bg-t-black-gradient">
        <video autoPlay loop muted playsInline className="absolute inset-0 z-10 h-full w-full object-cover opacity-40">
          <source src="/videos/logo-bg.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 flex w-full flex-col items-center justify-start px-4">
          <Header />
          <SummaryCard />
        </div>
      </div>
    </>
  );
}
