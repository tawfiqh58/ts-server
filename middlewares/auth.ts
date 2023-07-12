import { Request, Response, NextFunction } from 'express';

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  console.log(req.headers['token']);
  if (!req.headers.token) {
    return next();
  }

  try {
    // This project focus on Typescript rather than the actual implementaion
    const payload = { id: '1', email: 'some@email.com' };
    req.currentUser = payload;
  } catch (err) {}

  next();
};
