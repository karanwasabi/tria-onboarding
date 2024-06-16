import Link from 'next/link';
import Button from '@/components/ui/button';

const LoginProviders: React.FC = () => {
  return (
    <>
      <div className="flex w-full grow flex-col items-center justify-end">
        <div className="flex w-full flex-col gap-3 rounded-2xl bg-t-light-4 p-4">
          <Link href={`/signup`}>
            <Button variant="purple" icon="google">
              Continue with Google
            </Button>
          </Link>
          <Link href={`/signup`}>
            <Button variant="plain" icon="x">
              Continue with X (formerly Twitter)
            </Button>
          </Link>
          <Link href={`/signup`}>
            <Button variant="plain" icon="phonemail">
              Continue with Phone or Email
            </Button>
          </Link>
          <div className="flex w-full items-center justify-center gap-3">
            <div className="flex grow bg-t-white-10">
              <div className="h-0.5 w-full"></div>
            </div>
            <div className="text-12 font-semibold text-t-light-30">OR</div>
            <div className="flex grow bg-t-white-10">
              <div className="h-0.5 w-full"></div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-3 pb-2">
            <div className="w-1/2">
              <Link href={`/signup`}>
                <Button variant="outline" icon="metamask" centered={true}>
                  Metamask
                </Button>
              </Link>
            </div>
            <div className="w-1/2">
              <Link href={`/signup`}>
                <Button variant="outline" icon="walletconnect" centered={true}>
                  WalletConnect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LoginProviders.displayName = 'LoginProviders';

export default LoginProviders;
