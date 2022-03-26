import { Express } from "express";
export { request } from "./request";
/**
 * Create an express application
 * @returns
 */
export declare function createApp(): Express;
/**
 * Connect to a mongodb database
 * @params dbUrl
 * @returns
 */
export declare const connect: (dbUrl: string) => Promise<void>;
/**
 * Disconnect from a mongodb database
 */
export declare const disconnect: () => Promise<void>;
/**
 * Convert string with values sperated by , to array
 * @param syms
 * @returns
 */
export declare const convertSymsToArray: (syms: string) => string[];
/**
 * Convert array to string with values seperated by ,
 * @param syms
 * @returns
 */
export declare const convertSymsToString: (syms: string[]) => string;
