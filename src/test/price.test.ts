import axios from "axios"
import request from "supertest"
require('dotenv').config()
import {comparePriceResponse, connectDb, disconnectDb, priceResponse} from "."


import {app} from "../app"
import config from "../config"

jest.mock("axios");
jest.mock("../services/getPrice", ()=>{
    return {
        __esModule: true,
        ...jest.requireActual("../services/getPrice"),
        getPricesFromDB:() => console.log("yes calling")


    }
})


describe("Price Service API", ()=>{
    beforeAll( async ()=>{
    await connectDb(config.get("TEST_DB_URL"))

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


    it("should get price info from db if axios request fails", async ()=>{
        (axios as any).get.mockRejectedValue(new Error('API returned an error'))
        const res = await request(app).get("/prices?fsyms=BTC&tsyms=USD,EUR").send()
        expect(res.status).toBe(200)
        expect(axios.get).toHaveBeenCalledWith("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR")
        expect(res.body).toEqual(priceResponse)
    
    })


    it("should return error for not allowed curreny pair (GHS)", async ()=>{
        (axios as any).get.mockResolvedValueOnce({data:comparePriceResponse});
        const res = await request(app).get("/prices?fsyms=BTC&tsyms=USD,GHS").send()
        expect(res.status).toBe(400)
        expect(axios.get).not.toHaveBeenCalledWith("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,GHS")
        expect(res.body).toEqual({
            "error": {
                "message": "Currency GHS not allowed"
            }
        })
    
    })



})