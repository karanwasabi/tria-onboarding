import Footer from '@/components/server/footer';
import LoginHero from '@/components/server/login/login-hero';
import LoginProviders from '@/components/server/login/login-providers';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="t-container">
        <LoginHero showBackButton={false} />
        <LoginProviders />
        <Footer />
      </div>
    </main>
  );
}
