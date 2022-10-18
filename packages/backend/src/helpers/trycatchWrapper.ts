import { Response, Request, NextFunction } from 'express';

type GenericFunction = (req: Request, res: Response, next: NextFunction) => any;

export const tryCatchWrapper = (ctrl: GenericFunction) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};
