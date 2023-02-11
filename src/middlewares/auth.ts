import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';
import statusCodes from '../statusCodes';

require('dotenv/config');

const secret = process.env.JWT_SECRET as string;

const authorizationVerify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const decoded = verify(token, secret) as JwtPayload;
    req.user = decoded;
    next();
  } catch (err) {
    if (err) return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};

export default authorizationVerify;