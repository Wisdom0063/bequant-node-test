import {Request, Response, NextFunction} from "express"
import config from "../config";
import { convertSymsToArray, throwError } from "../lib";
/**
 * Express error middleware
 * @param error 
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
export function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    const { message, status: statusCode = 500 } = error;
    if (res.headersSent) {
        return next(error)
      }
    return res.status(statusCode).json(
        statusCode === 500
            ? { error: { message: "Sorry an error occurred. Please try again later" } }
            : {
                error: {
                    message
                }
            }
    );
}

/**
 * A middleware that checks if a currency being passed is part of the allowed currencies
 * @param req 
 * @param res 
 * @param next 
 */
export function ensureAllowedCurrencies(req:Request,res:Response, next:NextFunction){

    try {

        let {fsyms, tsyms} = req.query

        fsyms = convertSymsToArray(fsyms as string)
        tsyms = convertSymsToArray(tsyms as string)
    
        if(!fsyms || !tsyms) throwError("Both fsyms and tysms are required", 400)
    
    
        const allowedCurrencies = convertSymsToArray(config.get("CURRENCIES")).map(currency=>currency.toUpperCase())    
        const syms = [...fsyms, ...tsyms]
    
        syms.map((sym)=>{
           if(!allowedCurrencies.includes(sym.toUpperCase())){
            throwError(`Currency ${sym} not allowed`, 400)
           }
    
        })
        next()

        
    } catch (error) {
        next(error)
        
    }




}