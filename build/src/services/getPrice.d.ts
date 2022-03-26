import { IPriceModel } from "../models/prices";
export declare function getPricesFromDB(fsyms: string[], tsyms: string[]): Promise<IPriceModel[]>;
export declare function getAndSavePrices(fsyms: string[], tsyms: string[]): Promise<IPriceModel[]>;
