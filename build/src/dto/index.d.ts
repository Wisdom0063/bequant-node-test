import { PriceResponse } from "../lib/prices";
import { IPriceModel } from "../models/prices";
export interface PriceInputDTO {
    type?: string;
    market: string;
    fromSymbol: string;
    toSymbol: string;
    price: number;
    toCurrencySymbol?: string;
    fromCurrencySymbol?: string;
    lastUpdate: number;
    openDay: number;
    highDay: number;
    lowDay: number;
    open24Hour: number;
    high24Hour: number;
    low24Hour: number;
    lastMarket: string;
    volumeHour: number;
    volumeHourTo: number;
    openHour: number;
    highHour: number;
}
export interface PriceOutputDTO {
    [key: string]: {
        [key: string]: IPriceModel;
    };
}
export declare class PriceMapper {
    static toPriceInputDTO(priceInfo: PriceResponse[]): PriceInputDTO[];
    static toOutputDTO(priceInfo: IPriceModel[], fsms: string[], tsms: string[]): PriceOutputDTO;
}
