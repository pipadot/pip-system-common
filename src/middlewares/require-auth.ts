import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import jwt, {
  JsonWebTokenError,
  TokenExpiredError,
  NotBeforeError,
} from 'jsonwebtoken';
import { NotAuthenticateError } from '../errors/not-authenticated-error';
import { UserPayload } from './current-user';
import { PipTokenExpiredError } from '../errors/token-expired-error';
import { AccountStatus } from '../types/account-status';
import { PipJsonWebTokenError } from '../errors/json-web-token-error';
import { PipTokenNotBeforeError } from '../errors/token-not-before-error';

export const requireLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.access_token) {
    throw new NotAuthenticateError('You are not authenticated.');
  }

  try {
    const payload = jwt.verify(
      req.session.access_token,
      process.env.ACCESS_TOKEN_SECRET!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      req.currentUser = null;
      throw new PipTokenExpiredError(err.expiredAt);
    }
    if (err instanceof JsonWebTokenError) {
      req.currentUser = null;
      throw new PipJsonWebTokenError(err.message);
    }
    if (err instanceof NotBeforeError) {
      req.currentUser = null;
      throw new PipTokenNotBeforeError(err.message, err.date);
    }
  }

  next();
};

export const requireRole = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (
      !roles.includes(req.currentUser!.role) ||
      req.currentUser!.status != AccountStatus.Active
    ) {
      throw new NotAuthorizedError('You are not authorized.');
    }
    next();
  };
};
