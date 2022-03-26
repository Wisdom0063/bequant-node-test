"use strict"

import { Schema } from "mongoose"
import { IPriceModel } from "..";

const RolesSchema = new Schema<IPriceModel>({
    type: { type: String, required: true },
    market: { type: String, required: true },
    fromSymbol: { type: String, required: true },
    toSymbol: { type: String, required: true },
    price: { type: Number, required: true },
    fromCurrencySymbol: { type: String, required: true },
    toCurrencySymbol: { type: String, required: true },
    lastUpdate: { type: Number, required: true },
    openDay: { type: Number},
    highDay: { type: Number},
    lowDay: { type: Number},
    open24Hour: { type: Number},
    high24Hour: { type: Number},
    low24Hour:{ type: Number},
    lastMarket:{ type: String},
    volumeHour: { type: Number},
    volumeHourTo: { type: Number},
    openHour: { type: Number},
    highHour: { type: Number},
    lowHour:{ type: Number},

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




export default RolesSchema