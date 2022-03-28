
'use strict'
/**
 * This file load all configuration values from the .env file
 * @author Wisdom Kwarteng
 */
import  convict from "convict"
import * as cron from "cron-validator"
import { loadEenv } from "../lib"
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') loadEenv()


const config = convict({
    NODE_ENV: {
      doc: 'Node Env',
      default: 'development',
      env: 'NODE_ENV'
    },
    PORT: {
      doc: 'The port to bind.',
      format: 'port',
      default: 3000,
      env: 'PORT'
    },
    DB_URL: {
      doc: 'Mongodb connection url',
      format: String,
      env: 'DB_URL',
      default: process.env.DB_URL as string,
    },

    TEST_DB_URL: {
        doc: 'Mongodb  test connection url',
        format: String,
        env: 'TEST_DB_URL',
        default: process.env.TEST_DB_URL as string,
      },

    CURRENCIES:{
        doc: 'Allowed currencies',
        format: String,
        env: 'CURRENCIES',
        default: process.env.CURRENCIES as string,
      },

      SCHEDULER_INTERVAL:{
        doc: 'Time interval scheduler should run to save prices in database',
        format: function( val){
                if (!cron.isValidCron(val)) {
                    throw new Error('must be a a valid cron expression')
                }
        },
        env: 'SCHEDULER_INTERVAL',
        default: "*/3 * * * *",
      }

})
config.validate({allowed: 'strict'});
export default config