
import { Server, Socket } from "socket.io"
import {Server as HttpServer} from "http"

interface SocketsState {
    [id: string]: Socket[];
}

interface IEmit{
    event: string;
    id: string;
    args: any;
}

export enum SOCKET_EVENTS {
    PRICES = 'prices'
}


const socketsState: SocketsState = {};


/**
 * A helper function to register clients to receive updates for an event
 * @param id 
 * @param socket 
 * @returns 
 */
const add = (id: string, socket: Socket) => {
    if (!socketsState[id]) {
        socketsState[id] = [];
    }

    socketsState[id] = [...socketsState[id], socket];

    return socketsState[id];
};



/**
  * A helper function to remove a client from receiving updates for an events
 * @param id 
 * @param socket 
 * @returns 
 */
const remove = (id: string, socket: Socket) => {
    if (!socketsState[id]) {
        return null;
    }

    socketsState[id] = socketsState[id].filter((s) => s.id !== socket.id);

    if (!socketsState[id].length) {
        delete socketsState[id]
    }

    return null;
};


/**
 * A helper function to send update of an event to a client
 * @param param0 
 * @returns 
 */
const emit = ({
    event,
    id,
    args,
}:IEmit ) => {
    if (!socketsState[id]) {
        return null;
    }

    socketsState[id].forEach((socket) =>
        socket.emit(event, { event, id, args }),
    );

    return null;
};

export const socketHandler = { add, remove, emit };



// setup the websocket server

export default function initSocket(server: HttpServer) {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });




    io.on('connection', async (socket) => {
        // Register all clients that has requestged to receive price updates
        socket.on(SOCKET_EVENTS.PRICES, ()=>{
            add(SOCKET_EVENTS.PRICES, socket)
        })


        socket.on('disconnect', () => {
            // remove client from receiving price update when they disconnect
            remove(SOCKET_EVENTS.PRICES, socket)
            socket.disconnect();
        });
    })

    return io


}





