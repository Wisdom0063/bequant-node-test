"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const retryLimit = 3;
(0, axios_retry_1.default)(axios_1.default, { retries: retryLimit });
exports.request = axios_1.default;
//# sourceMappingURL=request.js.map