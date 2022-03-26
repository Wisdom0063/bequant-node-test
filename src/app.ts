import http from "http"
import config from "./config"
import { getPricesController } from "./controller"
import { createApp } from "./lib"
import initSocket from "./websocket"
import "./jobs"

const PORT = config.get("PORT")
const app = createApp()
app.get("/prices", getPricesController)
const server = http.createServer(app);
initSocket(server)
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})