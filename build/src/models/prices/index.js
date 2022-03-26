'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceModel = void 0;
/**
 * The Price Model
 */
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
const Model = mongoose_1.default.model('Price', schema_1.default);
/**
 * save a price record
 * @param payload
 */
const save = async (payload) => {
    if (Array.isArray(payload)) {
        const docs = await Model.insertMany(payload);
        return docs.map(doc => doc.toObject());
    }
    const item = new Model(payload);
    let doc = await item.save();
    return doc.toObject();
};
/**
 * This function allows to find one record in the database
 * @param Model
 * @returns
 */
const findOne = async ({ query, options }) => {
    const doc = Model.findOne(query, null, options);
    const item = await doc.exec();
    return item ? item.toObject() : null;
};
exports.PriceModel = {
    save,
    findOne,
};
//# sourceMappingURL=index.js.map