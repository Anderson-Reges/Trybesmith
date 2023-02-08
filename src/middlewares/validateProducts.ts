import { NextFunction, Response, Request } from 'express';
import { productSchema } from './schemas';

const validateProductValues = (req: Request, res: Response, next: NextFunction) => {
  const productValues = req.body;

  const data = productSchema.safeParse(productValues);
  let messageError;

  if (!data.success) {
    const { message } = data.error.issues[0];
    messageError = message;
  }

  // messageError === '"name" must be a string' || messageError === '"amount" must be a string'
  //   ? res.status(statusCodes.BAD_REQUEST).json({ messageError })
  //   : res.status(statusCodes.Unprocessable_Entity).json({ messageError });

  if (messageError === '"name" is required' || messageError === '"amount" is required') {
    return res.status(400).json({ message: messageError });
  } 

  if (messageError) {
    return res.status(422).json({ message: messageError });
  }

  next();
};

export default validateProductValues;