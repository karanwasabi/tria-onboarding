import Footer from '@/components/server/footer';
import LoadingGrid from '@/components/client/animations/loading-grid';
import Logo from '@/components/server/ui/logo';

export default function Loading() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <div className="t-container relative">
          <div className="absolute inset-0 z-0">
            <LoadingGrid />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-between pb-4">
            <Logo showBackButton={false} showVideo={false} />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
