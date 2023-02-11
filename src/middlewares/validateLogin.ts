import { NextFunction, Response, Request } from 'express';
import { userLoginSchema } from './schemas';

const validateLoginValues = (req: Request, res: Response, next: NextFunction) => {
  const loginValues = req.body;

  const data = userLoginSchema.safeParse(loginValues);

  if (!data.success) {
    const { message } = data.error.issues[0];
    return res.status(400).json({ message });
  }

  next();
};

export default validateLoginValues;