import { NextFunction, Response, Request } from 'express';
import statusCodes from '../statusCodes';
import { userSchema } from './schemas';

const validateNewUser = (req: Request, res: Response, next: NextFunction) => {
  const productValues = req.body;

  const data = userSchema.safeParse(productValues);

  if (!data.success) {
    const { message } = data.error.issues[0];
    return message.includes('required') 
      ? res.status(statusCodes.BAD_REQUEST).json({ message })
      : res.status(statusCodes.Unprocessable_Entity).json({ message });
  }

  next();
};

export default validateNewUser;