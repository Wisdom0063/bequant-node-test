
import {Request, Response, NextFunction} from "express"
import { PriceMapper } from "../dto"
import { convertSymsToArray } from "../lib"
import { getAndSavePrices } from "../services"

export async function getPricesController(req:Request, res:Response, next:NextFunction){
    let {fsyms, tsyms} = req.query
    fsyms = convertSymsToArray(fsyms as string)
    tsyms = convertSymsToArray(tsyms as string)
    if(!fsyms || !tsyms) return

    let prices = await getAndSavePrices(fsyms, tsyms)
    const pricesOutputDTO = PriceMapper.toOutputDTO(prices??[], fsyms, tsyms  )

    return res.json(pricesOutputDTO)

}