import { NextFunction, Response, Request } from 'express';
import { z } from 'zod';

const validateLoginValues = (req: Request, res: Response, next: NextFunction) => {
  const loginValues = req.body;
  
  const userSchema = z.object({
    username: z.string({
      required_error: '"username" is required',
      invalid_type_error: 'Username must be of type string',
    }),
    password: z.string({
      required_error: '"password" is required',
      invalid_type_error: 'Password must be of type number',
    }),
  });

  const data = userSchema.safeParse(loginValues);

  if (!data.success) {
    const { message } = data.error.issues[0];
    return res.status(400).json({ message });
  }

  next();
};

export default validateLoginValues;