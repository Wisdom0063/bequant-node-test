import axios from "axios"
import request from "supertest"
require('dotenv').config()
import {comparePriceResponse, connectDb, disconnectDb, priceResponse} from "."

import {app} from "../app"
import config from "../config"

jest.mock("axios");


describe("Price Service API", ()=>{
    beforeAll( async ()=>{
        console.log(config.get("DB_URL"))
    await connectDb(config.get("DB_URL"))

    })

    afterAll(  (done)=>{
        disconnectDb().then(()=>done())
    })



    it("should request for a price", async ()=>{
        (axios as any).get.mockResolvedValueOnce({data:comparePriceResponse});
        const res = await request(app).get("/prices?fsyms=BTC&tsyms=USD,EUR").send()
        expect(res.status).toBe(200)
        expect(axios.get).toHaveBeenCalledWith("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR")
        expect(res.body).toEqual(priceResponse)
    
    })


    it("should request for a price", async ()=>{
        (axios as any).get.mockRejectedValue(new Error('Async error'))
        const res = await request(app).get("/prices?fsyms=BTC&tsyms=USD,EUR").send()
        expect(res.status).toBe(200)
        expect(axios.get).toHaveBeenCalledWith("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR")
        expect(res.body).toEqual(priceResponse)
    
    })



})