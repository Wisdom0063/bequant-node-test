import { PriceResponse } from "..";
/**
 * Get prices using compareprice API
 * @param fsyms
 * @param tsyms
 * @returns
 */
export declare function getPrices(fsyms: string[], tsyms: string[]): Promise<PriceResponse[]>;
