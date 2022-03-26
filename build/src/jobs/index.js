"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JOB_TYPES = void 0;
const agenda_1 = require("agenda");
const config_1 = __importDefault(require("../config"));
const lib_1 = require("../lib");
const services_1 = require("../services");
var JOB_TYPES;
(function (JOB_TYPES) {
    JOB_TYPES["GET_PRICES_AND_SAVE"] = "get-prices-and-save";
})(JOB_TYPES = exports.JOB_TYPES || (exports.JOB_TYPES = {}));
const jobQueue = new agenda_1.Agenda({
    db: {
        address: config_1.default.get("DB_URL"),
        collection: "jobs",
    },
});
jobQueue.define(JOB_TYPES.GET_PRICES_AND_SAVE, async (job) => {
    const currencyArray = (0, lib_1.convertSymsToArray)(config_1.default.get("CURRENCIES"));
    const result = await (0, services_1.getAndSavePrices)(currencyArray, currencyArray);
    console.log(result);
});
jobQueue.on('ready', () => {
    jobQueue.start();
    jobQueue.every('*/60 * * * *', JOB_TYPES.GET_PRICES_AND_SAVE);
});
//# sourceMappingURL=index.js.map