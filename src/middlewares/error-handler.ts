import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { CustomErrorApp } from '../app-errors/custom-error';
import { logError } from './log-helper';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    logError('WEB', err.statusCode, err.serializeErrors());
    return res.status(err.statusCode).send(err.serializeErrors());
  }
  if (err instanceof CustomErrorApp) {
    logError('APP', err.statusCode, err.serializeErrors());
    return res.status(err.statusCode).send(err.serializeErrors());
  }

  logError(
    'SYSTEM',
    { code: -400 },
    { name: err.name, message: err.message, stack: err.stack }
  );
  res.status(400).send({
    response_status: -400,
    errors: [{ message: 'Something went wrong' }],
    status: -400,
    message: 'Something went wrong',
  });
};
