import LoginHero from '@/components/login/login-hero';
import Footer from '@/components/footer';

import { IChildren } from '@/models/interfaces';

export default async function SignupLayout({ children }: IChildren) {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <div className="t-container">
          <LoginHero showBackButton={true} />
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
}
