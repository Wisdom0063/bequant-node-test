"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const lib_1 = require("./lib");
(0, lib_1.connect)(config_1.default.get("DB_URL")).then(() => require("./app"));
//# sourceMappingURL=index.js.map