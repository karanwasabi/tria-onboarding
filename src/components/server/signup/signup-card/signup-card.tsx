import Image from 'next/image';

import LilHearts from '@/components/client/animations/lil-hearts';
import SignupForm from '@/components/client/signup/signup-form';

const SignupCard: React.FC = () => {
  return (
    <>
      <div className="flex w-full grow flex-col items-center justify-end px-4">
        <div className="flex w-full flex-col gap-3 rounded-2xl bg-t-light-4 p-4">
          <h2 className="pb-2 text-t-light-70">Create your Tria name</h2>

          <SignupForm />

          <div className="relative flex w-full items-stretch justify-center gap-2.5 overflow-hidden rounded-xl border border-solid border-t-light-8 p-4">
            <div className="absolute -left-40 -top-40 size-65 animate-shine-45">
              <Image src={`/images/effects/shine-45.png`} alt="" width={260} height={260} />
            </div>

            <LilHearts />

            <div className="text-12 font-normal text-t-light-30">
              Your <span className="font-semibold text-t-light-70">@tria</span> is like Gmail, for Web3. Pay, receive
              and log-in to apps on any device, and blockchain.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignupCard.displayName = 'SignupCard';

export default SignupCard;
