'use strict'
/**
 * The Price Model
 */
import mongoose from 'mongoose'
import { PriceInputDTO } from '../../dto'
import schema from './schema'


export interface IPriceModel{
    type?:string,
    market: string
    fromSymbol: string,
    toSymbol: string,
    price: number,
    toCurrencySymbol?:string,
    fromCurrencySymbol?:string,
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


const Model = mongoose.model<IPriceModel>('Price', schema)


/**
 * save a price record
 * @param payload 
 */
const save = async (payload: PriceInputDTO | PriceInputDTO[]):Promise<IPriceModel | IPriceModel[]> =>{

    if (Array.isArray(payload)) {
        const docs = await Model.insertMany(payload)
        return docs.map(doc=>doc.toObject())
    
      }
      const item = new Model(payload)
      let doc = await item.save()

      return doc.toObject()
    
}


/**
 * This function allows to find one record in the database
 * @param Model 
 * @returns 
 */
 const findOne =  async ({ query, options}: any):Promise<IPriceModel | null> => {
    const doc = Model.findOne(query, null, options)
    const item = await doc.exec()
    return item ? item.toObject() : null
  }





export const PriceModel = {
    save,
  findOne,
}