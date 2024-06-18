import Topbar from '@/components/server/dashboard/topbar';
import Footer from '@/components/server/footer';

import { IChildren } from '@/models/interfaces';

export default async function DashboardLayout({ children }: IChildren) {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <div className="t-dashboard-container relative">
          <Topbar />
          {children}
          <Footer compactMode={true} />
        </div>
      </main>
    </>
  );
}
