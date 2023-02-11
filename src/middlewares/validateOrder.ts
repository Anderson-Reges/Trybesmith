import { NextFunction, Response, Request } from 'express';
import statusCodes from '../statusCodes';
import { orderSchema } from './schemas';

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const orderValues = req.body;

  const data = orderSchema.safeParse(orderValues);

  if (!data.success) {
    const { message } = data.error.issues[0];
    return message.includes('required') 
      ? res.status(statusCodes.BAD_REQUEST).json({ message })
      : res.status(statusCodes.Unprocessable_Entity).json({ message });
  }

  next();
};

export default validateOrder;