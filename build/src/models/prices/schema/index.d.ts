/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Schema } from "mongoose";
import { IPriceModel } from "..";
declare const RolesSchema: Schema<IPriceModel, import("mongoose").Model<IPriceModel, any, any, any>, any, any>;
export default RolesSchema;
