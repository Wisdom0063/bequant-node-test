import { Agenda } from "agenda"
import config from "../config";
import { PriceMapper } from "../dto";
import { convertSymsToArray } from "../lib";
import { getAndSavePrices } from "../services";
import {socketHandler, SOCKET_EVENTS} from "../websocket"

export enum JOB_TYPES {
    GET_PRICES_AND_SAVE = "get-prices-and-save"
}

// Initialize agenda and save job information in a collection called jobs
const jobQueue = new Agenda({
    db: {
        address: config.get("DB_URL"),
        collection: "jobs",
    },
});


jobQueue.define(JOB_TYPES.GET_PRICES_AND_SAVE, async () => {
    // Get list of acceptable currency pairs
const currencyArray = convertSymsToArray(config.get("CURRENCIES"))
// Get price information for all acceptable currency pairs and save it in the db
const prices = await  getAndSavePrices(currencyArray, currencyArray)
// Send price information to all clients that have subscribed to the prices events

const priceOutputDTO = PriceMapper.toOutputDTO(prices,currencyArray, currencyArray )
socketHandler.emit({event:SOCKET_EVENTS.PRICES, id:SOCKET_EVENTS.PRICES, args:priceOutputDTO})
console.log("Prices obtained, saved and send to all clients that has subscribed to receive price information", priceOutputDTO)
    

})

jobQueue.on('ready', () => {
    jobQueue.start();
    jobQueue.every(config.get("SCHEDULER_INTERVAL"), JOB_TYPES.GET_PRICES_AND_SAVE)

})
