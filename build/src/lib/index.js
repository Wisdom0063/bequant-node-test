'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSymsToString = exports.convertSymsToArray = exports.disconnect = exports.connect = exports.createApp = exports.request = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
var request_1 = require("./request");
Object.defineProperty(exports, "request", { enumerable: true, get: function () { return request_1.request; } });
/**
 * Create an express application
 * @returns
 */
function createApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json({ limit: "50mb" }));
    return app;
}
exports.createApp = createApp;
/**
 * Connect to a mongodb database
 * @params dbUrl
 * @returns
 */
const connect = (dbUrl) => {
    return mongoose_1.default
        .connect(dbUrl)
        .then(() => {
        console.info('db connected successfully');
    });
};
exports.connect = connect;
/**
 * Disconnect from a mongodb database
 */
const disconnect = () => mongoose_1.default.disconnect();
exports.disconnect = disconnect;
/**
 * Convert string with values sperated by , to array
 * @param syms
 * @returns
 */
const convertSymsToArray = (syms) => {
    return syms.split(",");
};
exports.convertSymsToArray = convertSymsToArray;
/**
 * Convert array to string with values seperated by ,
 * @param syms
 * @returns
 */
const convertSymsToString = (syms) => {
    return syms.join(",");
};
exports.convertSymsToString = convertSymsToString;
//# sourceMappingURL=index.js.map