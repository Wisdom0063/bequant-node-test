'use strict'
/**
 * Staffs API request handlers
 * @author Wisdom Kwarteng
 */
import express from "express"
import { getPricesController } from "../controller"
import { ensureAllowedCurrencies } from "../middleware"
export const priceRouter = express.Router()

/**
 * API request handler for adding staff
 */
 priceRouter.get("/", ensureAllowedCurrencies, getPricesController)