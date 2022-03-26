"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPricesController = void 0;
const dto_1 = require("../dto");
const lib_1 = require("../lib");
const services_1 = require("../services");
async function getPricesController(req, res, next) {
    let { fsyms, tsyms } = req.query;
    fsyms = (0, lib_1.convertSymsToArray)(fsyms);
    tsyms = (0, lib_1.convertSymsToArray)(tsyms);
    if (!fsyms || !tsyms)
        return;
    let prices = await (0, services_1.getAndSavePrices)(fsyms, tsyms);
    const pricesOutputDTO = dto_1.PriceMapper.toOutputDTO(prices !== null && prices !== void 0 ? prices : [], fsyms, tsyms);
    return res.json(pricesOutputDTO);
}
exports.getPricesController = getPricesController;
//# sourceMappingURL=index.js.map