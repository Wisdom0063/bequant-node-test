"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceMapper = void 0;
class PriceMapper {
    static toPriceInputDTO(priceInfo) {
        return priceInfo.map((info) => ({
            type: info.type,
            market: info.market,
            fromSymbol: info.fromSymbol,
            toSymbol: info.toSymbol,
            price: info.price,
            fromCurrencySymbol: info.fromCurrencySymbol,
            toCurrencySymbol: info.toCurrencySymbol,
            lastUpdate: info.lastUpdate,
            openDay: info.openDay,
            highDay: info.highDay,
            lowDay: info.lowDay,
            open24Hour: info.open24Hour,
            high24Hour: info.high24Hour,
            low24Hour: info.low24Hour,
            lastMarket: info.lastMarket,
            volumeHour: info.volumeHour,
            volumeHourTo: info.volumeHourTo,
            openHour: info.openHour,
            highHour: info.highHour,
        }));
    }
    static toOutputDTO(priceInfo, fsms, tsms) {
        return fsms.reduce((acc, curr) => {
            const fsmsPair = tsms.reduce((acc2, curr2) => {
                const info = priceInfo.find(val => val.fromSymbol === curr && val.toSymbol === curr2);
                acc2[curr2] = info ? {
                    type: info.type,
                    market: info.market,
                    fromSymbol: info.fromSymbol,
                    toSymbol: info.toSymbol,
                    price: info.price,
                    fromCurrencySymbol: info.fromCurrencySymbol,
                    toCurrencySymbol: info.toCurrencySymbol,
                    lastUpdate: info.lastUpdate,
                    openDay: info.openDay,
                    highDay: info.highDay,
                    lowDay: info.lowDay,
                    open24Hour: info.open24Hour,
                    high24Hour: info.high24Hour,
                    low24Hour: info.low24Hour,
                    lastMarket: info.lastMarket,
                    volumeHour: info.volumeHour,
                    volumeHourTo: info.volumeHourTo,
                    openHour: info.openHour,
                    highHour: info.highHour,
                } : {};
                return acc2;
            }, {});
            acc[curr] = fsmsPair;
            return acc;
        }, {});
    }
}
exports.PriceMapper = PriceMapper;
//# sourceMappingURL=index.js.map