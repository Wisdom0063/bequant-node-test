import { Agenda } from "agenda"
import config from "../config";
import { convertSymsToArray } from "../lib";
import { getAndSavePrices } from "../services";

export enum JOB_TYPES {
    GET_PRICES_AND_SAVE = "get-prices-and-save"
}

const jobQueue = new Agenda({
    db: {
        address: config.get("DB_URL"),
        collection: "jobs",
    },
});


jobQueue.define(JOB_TYPES.GET_PRICES_AND_SAVE, async () => {
const currencyArray = convertSymsToArray(config.get("CURRENCIES"))
 await  getAndSavePrices(currencyArray, currencyArray)
console.log("Prices obtained and saved")
    

})

jobQueue.on('ready', () => {
    jobQueue.start();
    jobQueue.every(config.get("SCHEDULER_INTERVAL"), JOB_TYPES.GET_PRICES_AND_SAVE)

})
