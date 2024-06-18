import { z } from 'zod';

export const SIGNUP_ZOD = z.object({
  username: z
    .string()
    .min(1, { message: 'Please enter a username' })
    .min(3, { message: 'Username must be at least 3 characters long' }),
});

export type SignupSchema = z.infer<typeof SIGNUP_ZOD>;
