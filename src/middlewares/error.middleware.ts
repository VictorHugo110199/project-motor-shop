import { NextFunction, Request, Response } from "express";

import { ApiError } from "../helpers/Errors.helper";

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);

  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal Server Error";

  return res.status(statusCode).json({ message });
};