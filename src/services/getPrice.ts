'use strict'

import { PriceMapper } from "../dto"
import { getPrices } from "../lib/prices/compareprice"
import { PriceModel } from "../models"
import { IPriceModel } from "../models/prices"



/**
 * A function that obtain latest currency pair price information from DB
 * @param fsyms 
 * @param tsyms 
 * @returns 
 */
export  async function getPricesFromDB(fsyms:string[], tsyms:string[]):Promise<IPriceModel[]>{
    console.log(fsyms, tsyms)
    return fsyms.reduce( async (acc:any, fsym)=>{
      const result = await Promise.all(tsyms.map(async tsym=>{
        return PriceModel.findOne({query:{toSymbol:tsym, fromSymbol:fsym}, options:{sort: { _id: -1 }}})
      }))
      return [...acc, ...result]

    }, [])
}


/**
 * A function that obtain prices information from external service and save in DB
 * @param fsyms 
 * @param tsyms 
 * @returns 
 */

export  async function getAndSavePrices(fsyms:string[], tsyms:string[]){
    try {
       const  priceResponse = await getPrices(fsyms,  tsyms)
       // Convert response to PriceInputDTO and save in DB
         const pricesInptDto = PriceMapper.toPriceInputDTO(priceResponse)
       const result = await PriceModel.save(pricesInptDto)
       if(!result) return []
       if(!Array.isArray(result)) return [result]
       return result
    } catch (error) {
      return getPricesFromDB(fsyms,  tsyms)
    }

}






