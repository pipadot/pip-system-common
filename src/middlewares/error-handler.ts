import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { CustomErrorApp } from '../app-errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }
  if (err instanceof CustomErrorApp) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }

  console.error(err);
  res.status(400).send({
    response_status: -400,
    errors: [{ message: 'Something went wrong' }],
    status: -400,
    message: 'Something went wrong',
  });
};
