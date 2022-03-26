"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RolesSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    market: { type: String, required: true },
    fromSymbol: { type: String, required: true },
    toSymbol: { type: String, required: true },
    price: { type: Number, required: true },
    fromCurrencySymbol: { type: String, required: true },
    toCurrencySymbol: { type: String, required: true },
    lastUpdate: { type: Number, required: true },
    openDay: { type: Number },
    highDay: { type: Number },
    lowDay: { type: Number },
    open24Hour: { type: Number },
    high24Hour: { type: Number },
    low24Hour: { type: Number },
    lastMarket: { type: String },
    volumeHour: { type: Number },
    volumeHourTo: { type: Number },
    openHour: { type: Number },
    highHour: { type: Number },
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    },
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true
    }
});
exports.default = RolesSchema;
//# sourceMappingURL=index.js.map