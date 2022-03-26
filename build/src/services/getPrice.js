'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAndSavePrices = exports.getPricesFromDB = void 0;
const dto_1 = require("../dto");
const compareprice_1 = require("../lib/prices/compareprice");
const models_1 = require("../models");
async function getPricesFromDB(fsyms, tsyms) {
    return fsyms.reduce(async (acc, fsym) => {
        const result = await Promise.all(tsyms.map(async (tsym) => {
            return models_1.PriceModel.findOne({ query: { toSymbol: tsym, fromSymbol: fsym }, options: { sort: { _id: -1 } } });
        }));
        return [...acc, ...result];
    }, []);
}
exports.getPricesFromDB = getPricesFromDB;
async function getAndSavePrices(fsyms, tsyms) {
    try {
        const priceResponse = await (0, compareprice_1.getPrices)(fsyms, tsyms);
        const pricesInptDto = dto_1.PriceMapper.toPriceInputDTO(priceResponse);
        const result = await models_1.PriceModel.save(pricesInptDto);
        if (!result)
            return [];
        if (!Array.isArray(result))
            return [result];
        return result;
    }
    catch (error) {
        console.log(error);
        return getPricesFromDB(fsyms, tsyms);
    }
}
exports.getAndSavePrices = getAndSavePrices;
//# sourceMappingURL=getPrice.js.map