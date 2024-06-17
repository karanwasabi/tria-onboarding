import Button from '@/components/ui/button';
import Image from 'next/image';

const SignupForm: React.FC = () => {
  return (
    <>
      <div className="flex w-full grow flex-col items-center justify-end px-4">
        <div className="flex w-full flex-col gap-3 rounded-2xl bg-t-light-4 p-4">
          <h2 className="pb-2 text-t-light-70">Create your Tria name</h2>
          <div className="flex w-full flex-wrap gap-3">
            <div className="grow rounded-xl bg-t-light-4"></div>
            <div className="w-30">
              <Button variant="purple" centered={true}>
                Next
              </Button>
            </div>
            <div className="text-14 flex w-full items-center justify-start gap-1 font-semibold text-t-red">
              <Image src={`/svgs/icons/icon-error.svg`} alt={`error`} width={24} height={24} />
              Username not available
            </div>
            <div className="text-12 text-t-white-50 font-normal leading-normal">Recommended:</div>
            <div className="flex w-full items-center justify-start gap-3">
              <div className="w-1/3">
                <Button variant="outline" centered={true}>
                  kunaaal123
                </Button>
              </div>
              <div className="w-1/3">
                <Button variant="outline" centered={true}>
                  kunaaal123
                </Button>
              </div>
              <div className="w-1/3">
                <Button variant="outline" centered={true}>
                  kunaaal123
                </Button>
              </div>
            </div>
            <div className="relative flex w-full items-stretch justify-center gap-2.5 overflow-hidden rounded-xl border border-solid border-t-light-8 p-4">
              <div className="size-65 animate-shine-45 absolute -left-40 -top-40">
                <Image src={`/images/effects/shine-45.png`} alt="" width={260} height={260} />
              </div>
              <Image src={`/svgs/icons/icon-emoji.svg`} alt="" width={32} height={32} />
              <div className="text-12 font-normal text-t-light-30">
                Your <span className="font-semibold text-t-light-70">@tria</span> is like Gmail, for Web3. Pay, receive
                and log-in to apps on any device, and blockchain.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignupForm.displayName = 'SignupForm';

export default SignupForm;
