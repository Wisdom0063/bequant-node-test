"use strict"
import config from './config';
import { connect } from './lib';
import http from "http"
import initSocket from "./websocket"
import {app} from "./app"
const PORT = config.get("PORT")
connect(config.get("DB_URL")).then(() =>{
const server = http.createServer(app);
initSocket(server)
require("./jobs")
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
})