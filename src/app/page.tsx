import Logo from '@/components/server/ui/logo';
import LoginProviders from '@/components/server/login/login-providers';
import Footer from '@/components/server/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="t-container">
        <Logo showBackButton={false} />
        <LoginProviders />
        <Footer />
      </div>
    </main>
  );
}
