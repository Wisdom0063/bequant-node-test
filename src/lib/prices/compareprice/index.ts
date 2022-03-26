import { PriceResponse } from ".."
import { convertSymsToString } from "../.."
import {request} from "../../request"

const URL = 'https://min-api.cryptocompare.com/data/pricemultifull'


/**
 * Convert response from compareprice to PriceResponse
 * @param data 
 * @returns 
 */
function convertToPriceResponse(data:any):PriceResponse[]{
  return  Object.keys(data["RAW"]).reduce((acc:any, fsyms)=>{
        const pricesData = Object.values(data["RAW"][fsyms]).map((priceInfo:any)=>({
            type:priceInfo["TYPE"],
            market: priceInfo["MARKET"],
            fromSymbol: priceInfo["FROMSYMBOL"],
            toSymbol: priceInfo["TOSYMBOL"],
            lastUpdate:priceInfo["LASTUPDATE"],
            price: priceInfo["PRICE"],
            toCurrencySymbol: data["DISPLAY"][fsyms][priceInfo["TOSYMBOL"]]['TOSYMBOL'],
            fromCurrencySymbol:data["DISPLAY"][fsyms][priceInfo["TOSYMBOL"]]['FROMSYMBOL'],
            openDay: priceInfo["OPENDAY"],
            highDay: priceInfo["HIGHDAY"],
            lowDay: priceInfo["LOWDAY"],
            open24Hour: priceInfo["OPEN24HOUR"],
            high24Hour: priceInfo["HIGH24HOUR"],
            low24Hour: priceInfo["LOW24HOUR"],
            lastMarket: priceInfo["LASTMARKET"],
            volumeHour: priceInfo["VOLUMEHOUR"],
            volumeHourTo: priceInfo["VOLUMEHOURTO"],
            openHour: priceInfo["OPENHOUR"],
            highHour: priceInfo["HIGHHOUR"],
            lowHour:priceInfo["LOWHOUR"]
        }))
        return [...acc, ...pricesData]
    }, [])
}

/**
 * Get prices using compareprice API
 * @param fsyms 
 * @param tsyms 
 * @returns 
 */
export  async function getPrices(fsyms:string[], tsyms:string[]):Promise<PriceResponse[]>{
    const fsymsAsString = convertSymsToString(fsyms)
    const tsymsAsString = convertSymsToString(tsyms)
    const {data} = await request.get(`${URL}?fsyms=${fsymsAsString}&tsyms=${tsymsAsString}`)
    return convertToPriceResponse(data)
}