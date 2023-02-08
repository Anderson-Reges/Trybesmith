import { z } from 'zod';

export const productSchema = z.object({
  name: z.string({
    required_error: '"name" is required',
    invalid_type_error: '"name" must be a string',
  }).min(3, { message: '"name" length must be at least 3 characters long' }),
  amount: z.string({
    required_error: '"amount" is required',
    invalid_type_error: '"amount" must be a string',
  }).min(3, { message: '"amount" length must be at least 3 characters long' }),
});

export const userSchema = z.object({
  username: z.string({
    required_error: '"username" is required',
    invalid_type_error: 'Username must be of type string',
  }),
  password: z.string({
    required_error: '"password" is required',
    invalid_type_error: 'Password must be of type number',
  }),
});