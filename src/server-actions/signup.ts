'use server';

import { SignupSchema } from '@/models/zod/signup.schema';

interface ISignupResponse {
  success: boolean;
  suggestions?: string[];
  message?: string;
}

export async function signup(formData: SignupSchema): Promise<ISignupResponse> {
  try {
    const username = formData.username;

    const usernameAvailable =
      username && (username.endsWith('123') || username.endsWith('001') || username.endsWith('999'));

    if (!usernameAvailable) {
      const suggestions = [`${formData.username}123`, `${formData.username}001`, `${formData.username}999`];

      return { success: false, suggestions, message: 'Username not available' };
    }

    return { success: true };
  } catch (error) {
    return { success: false, message: 'Something went wrong' };
  }
}
