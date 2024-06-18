import Logo from '@/components/server/ui/logo';
import Footer from '@/components/server/footer';

import { IChildren } from '@/models/interfaces';

export default async function SignupLayout({ children }: IChildren) {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <div className="t-container">
          <Logo showBackButton={true} />
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
}
