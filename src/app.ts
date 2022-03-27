
import { getPricesController } from "./controller"
import { createApp } from "./lib"
export const app = createApp()
app.get("/prices", getPricesController)
