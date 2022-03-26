import { PriceInputDTO } from '../../dto';
export interface IPriceModel {
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
export declare const PriceModel: {
    save: (payload: PriceInputDTO | PriceInputDTO[]) => Promise<IPriceModel | IPriceModel[]>;
    findOne: ({ query, options }: any) => Promise<IPriceModel | null>;
};
