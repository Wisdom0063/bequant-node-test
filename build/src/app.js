"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config"));
const controller_1 = require("./controller");
const lib_1 = require("./lib");
const websocket_1 = __importDefault(require("./websocket"));
require("./jobs");
const PORT = config_1.default.get("PORT");
const app = (0, lib_1.createApp)();
app.get("/prices", controller_1.getPricesController);
const server = http_1.default.createServer(app);
(0, websocket_1.default)(server);
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map