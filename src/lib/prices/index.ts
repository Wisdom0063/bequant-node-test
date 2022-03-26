

export interface PriceResponse{
    type?:string
    market: string
    fromSymbol: string
    toSymbol: string
    price: number
    toCurrencySymbol?:string
    fromCurrencySymbol?:string
    lastUpdate:number
    openDay: number
    highDay: number
    lowDay: number
    open24Hour: number
    high24Hour: number
    low24Hour: number
    lastMarket: string
    volumeHour: number
    volumeHourTo: number
    openHour: number
    highHour: number
    lowHour:number
}