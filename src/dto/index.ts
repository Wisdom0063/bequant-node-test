"use strict"

import { PriceResponse } from "../lib/prices"
import { IPriceModel } from "../models/prices"

export interface PriceInputDTO{
    type?:string,
    market: string
    fromSymbol: string,
    toSymbol: string,
    price: number,
    toCurrencySymbol?:string
    fromCurrencySymbol?:string
    lastUpdate:number
    openDay: number,
    highDay: number,
    lowDay: number,
    open24Hour: number,
    high24Hour: number,
    low24Hour: number,
    lastMarket: string,
    volumeHour: number,
    volumeHourTo: number,
    openHour: number,
    highHour: number,
    lowHour:number
}



export interface PriceOutputDTO {
 [key : string]: {
    [key : string]: IPriceModel ;
 }
}


export class PriceMapper{
    static toPriceInputDTO(priceInfo:PriceResponse[]):PriceInputDTO[]{
            return priceInfo.map((info:PriceResponse)=>({
                type: info.type,
                market:info.market,
                fromSymbol:info.fromSymbol,
                toSymbol:info.toSymbol,
                price:info.price,
                fromCurrencySymbol: info.fromCurrencySymbol,
                toCurrencySymbol: info.toCurrencySymbol,
                lastUpdate:info.lastUpdate,
                openDay: info.openDay,
                highDay: info.highDay,
                lowDay: info.lowDay,
                open24Hour: info.open24Hour,
                high24Hour: info.high24Hour,
                low24Hour: info.low24Hour,
                lastMarket: info.lastMarket,
                volumeHour: info.volumeHour,
                volumeHourTo: info.volumeHourTo,
                openHour: info.openHour,
                highHour: info.highHour,
                lowHour:info.lowHour
                
            }))
        }

    static toOutputDTO(priceInfo:IPriceModel[], fsms:string[], tsms:string[]):PriceOutputDTO{
       return fsms.reduce((acc:any, curr)=>{
            const fsmsPair = tsms.reduce((acc2:any, curr2)=>{
                const info = priceInfo.find(val=>val.fromSymbol === curr && val.toSymbol === curr2 )
                acc2[curr2] =info ? {
                    type: info.type,
                    market:info.market,
                    fromSymbol:info.fromSymbol,
                    toSymbol:info.toSymbol,
                    price:info.price,
                    fromCurrencySymbol: info.fromCurrencySymbol,
                    toCurrencySymbol: info.toCurrencySymbol,
                    lastUpdate:info.lastUpdate,
                    openDay: info.openDay,
                    highDay: info.highDay,
                    lowDay: info.lowDay,
                    open24Hour: info.open24Hour,
                    high24Hour: info.high24Hour,
                    low24Hour: info.low24Hour,
                    lastMarket: info.lastMarket,
                    volumeHour: info.volumeHour,
                    volumeHourTo: info.volumeHourTo,
                    openHour: info.openHour,
                    highHour: info.highHour,
                    lowHour:info.lowHour
                    
                }:{}
                return acc2
            }, {})

        acc[curr] = fsmsPair
        return acc

        },{})
    }
}