'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@/components/server/ui/button';
import InputText from '@/components/server/ui/input-text';

import { SIGNUP_ZOD, SignupSchema } from '@/models/zod/signup.schema';
import { signup } from '@/server-actions/signup';

const SignupForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    trigger,
  } = useForm<SignupSchema>({
    resolver: zodResolver(SIGNUP_ZOD),
    mode: 'onBlur',
    defaultValues: {
      username: '',
    },
  });

  const [suggestions, setSuggestions] = useState<string[] | null | undefined>(null);

  const router = useRouter();

  const onSubmit = async (data: SignupSchema) => {
    const response = await signup(data);
    if (!response.success) {
      setError('username', { message: 'Username is not available' });
      setSuggestions(response.suggestions);
    } else {
      // Proceed with form submission
      router.push(`/signingup`);
    }
  };

  return (
    <>
      <form className="flex w-full flex-wrap gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="grow">
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <InputText {...field} label="Username" placeholder="name" suffix="@tria" autoFocus />
            )}
          />
        </div>
        <div className="flex w-30 items-stretch justify-center">
          <Button variant="purple" centered={true} size="full" isSubmit={true}>
            Next
          </Button>
        </div>

        {errors.username ? (
          <>
            <div className="flex w-full items-center justify-start gap-1 text-14 font-semibold text-t-red">
              <Image src={`/svgs/icons/icon-error.svg`} alt={`error`} width={24} height={24} />
              {errors.username.message}
            </div>
            {suggestions && (
              <>
                <div className="text-12 font-normal leading-normal text-t-white-50">Recommended:</div>
                <div className="flex w-full items-center justify-start gap-3">
                  {suggestions.map((suggestion) => (
                    <div className="w-1/3" key={suggestion}>
                      <Button
                        variant="outline"
                        centered={true}
                        onClick={() => {
                          setValue('username', suggestion);
                          trigger('username');
                        }}
                      >
                        {suggestion}
                      </Button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="h-6 w-full"></div>
        )}
      </form>
    </>
  );
};

SignupForm.displayName = 'SignupForm';

export default SignupForm;
