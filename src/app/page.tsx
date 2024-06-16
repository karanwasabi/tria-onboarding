import Footer from '@/components/footer';
import LoginHero from '@/components/login/login-hero';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="t-container">
        <LoginHero />
        <Footer />
      </div>
    </main>
  );
}
