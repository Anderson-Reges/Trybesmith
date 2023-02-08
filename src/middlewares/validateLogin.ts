import { NextFunction, Response, Request } from 'express';
import { userSchema } from './schemas';

const validateLoginValues = (req: Request, res: Response, next: NextFunction) => {
  const loginValues = req.body;

  const data = userSchema.safeParse(loginValues);

  if (!data.success) {
    const { message } = data.error.issues[0];
    return res.status(400).json({ message });
  }

  next();
};

export default validateLoginValues;