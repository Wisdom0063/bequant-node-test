
import { Server, Socket } from "socket.io"
import {Server as HttpServer} from "http"



export default function initSocket(server: HttpServer) {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });




    io.on('connection', async (socket) => {


        socket.on('disconnect', () => {

            socket.disconnect();
        });
    })

    return io

}