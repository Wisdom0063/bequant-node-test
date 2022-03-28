'use strict'
import express, {Express} from "express"
import mongoose from 'mongoose'
export {request} from "./request"



/**
 * Create an express application
 * @returns 
 */
export function createApp():Express {
    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json({limit:"50mb"}));
    return app;
}





/**
 * Connect to a mongodb database
 * @params dbUrl
 * @returns 
 */
export const connect = (dbUrl:string) => {
  return mongoose
    .connect(dbUrl)
    .then(() => {
      console.info('db connected successfully')
    })
}


/**
 * Disconnect from a mongodb database
 */
export const disconnect = () => mongoose.disconnect()



/**
 * Convert string with values sperated by , to array
 * @param syms 
 * @returns 
 */
export const convertSymsToArray = (syms:string)=>{

    return syms.split(",")

}


/**
 * Convert array to string with values seperated by ,
 * @param syms 
 * @returns 
 */
export const convertSymsToString = (syms:string[])=>{

    return syms.join(",")

}



export class CustomError extends Error {
    public status:number
    constructor(message:string, status:number) {
      super(message);
      this.status = status;
    }
  }

  export function throwError(message:string, status:number){
    throw new CustomError(message, status)
  }






