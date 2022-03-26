"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrices = void 0;
const __1 = require("../..");
const request_1 = require("../../request");
const URL = 'https://min-api.cryptocompare.com/data/pricemultifull';
/**
 * Convert response from compareprice to PriceResponse
 * @param data
 * @returns
 */
function convertToPriceResponse(data) {
    return Object.keys(data["RAW"]).reduce((acc, fsyms) => {
        const pricesData = Object.values(data["RAW"][fsyms]).map((priceInfo) => ({
            type: priceInfo["TYPE"],
            market: priceInfo["MARKET"],
            fromSymbol: priceInfo["FROMSYMBOL"],
            toSymbol: priceInfo["TOSYMBOL"],
            lastUpdate: priceInfo["LASTUPDATE"],
            price: priceInfo["PRICE"],
            toCurrencySymbol: data["DISPLAY"][fsyms][priceInfo["TOSYMBOL"]]['TOSYMBOL'],
            fromCurrencySymbol: data["DISPLAY"][fsyms][priceInfo["TOSYMBOL"]]['FROMSYMBOL']
        }));
        return [...acc, ...pricesData];
    }, []);
}
/**
 * Get prices using compareprice API
 * @param fsyms
 * @param tsyms
 * @returns
 */
async function getPrices(fsyms, tsyms) {
    const fsymsAsString = (0, __1.convertSymsToString)(fsyms);
    const tsymsAsString = (0, __1.convertSymsToString)(tsyms);
    const { data } = await request_1.request.get(`${URL}?fsyms=${fsymsAsString}&tsyms=${tsymsAsString}`);
    return convertToPriceResponse(data);
}
exports.getPrices = getPrices;
//# sourceMappingURL=index.js.map