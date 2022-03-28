
import { createApp } from "./lib"
import { errorHandler } from "./middleware"
import { priceRouter } from "./routes"
export const app = createApp()
app.use("/prices", priceRouter)
app.use(errorHandler)
