import { Request, Response, NextFunction } from "express";
export declare function getPricesController(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
