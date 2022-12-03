import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { NotAuthenticateError } from '../errors/not-authenticated-error';

interface UserPayload {
  id: string;
  phone: string;
  name: string;
  role: string;
  status: number;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (req: Request, res: Response) => {
  if (!req.session?.access_token || !req.session?.refresh_token) {
    // return next();
    throw new NotAuthenticateError('You are not authenticated.');
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
    res.status(200).send({
      response_status: 1,
      message: 'Login Successful',
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      response_status: -1,
      message: 'Login Fail',
    });
  }

  // next();
};
