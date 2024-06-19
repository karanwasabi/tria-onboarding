'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MockLoader: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clean up on unmount
  }, [router]); // Only run once when the component mounts

  return <></>;
};

MockLoader.displayName = 'MockLoader';

export default MockLoader;
