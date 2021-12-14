import { Request, Response, NextFunction } from "express";

export async function ErrorMiddleware(
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (err) {
      console.error(err);
      return res.status(500).send();
    }
    return await next();
  } catch (e) {
    return res.status(500).send();
  }
}
