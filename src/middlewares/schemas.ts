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

export const userLoginSchema = z.object({
  username: z.string({
    required_error: '"username" is required',
    invalid_type_error: 'Username must be of type string',
  }),
  password: z.string({
    required_error: '"password" is required',
    invalid_type_error: 'Password must be of type number',
  }),
});

export const userSchema = z.object({
  username: z.string({
    required_error: '"username" is required',
    invalid_type_error: '"username" must be a string',
  }).min(3, { message: '"username" length must be at least 3 characters long' }),
  vocation: z.string({
    required_error: '"vocation" is required',
    invalid_type_error: '"vocation" must be a string',
  }).min(3, { message: '"vocation" length must be at least 3 characters long' }),
  level: z.number({
    required_error: '"level" is required',
    invalid_type_error: '"level" must be a number',
  }).min(1, { message: '"level" must be greater than or equal to 1' }),
  password: z.string({
    required_error: '"password" is required',
    invalid_type_error: '"password" must be a string',
  }).min(8, { message: '"password" length must be at least 8 characters long' }),
});

export const orderSchema = z.object({
  productsIds: z.array(z.number(), {
    required_error: '"productsIds" is required',
    invalid_type_error: '"productsIds" must be an array',
  }).nonempty({
    message: '"productsIds" must include only numbers',
  }),
});