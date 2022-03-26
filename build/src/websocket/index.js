"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
function initSocket(server) {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });
    io.on('connection', async (socket) => {
        socket.on('disconnect', () => {
            socket.disconnect();
        });
    });
    return io;
}
exports.default = initSocket;
//# sourceMappingURL=index.js.map