
'use strict'
/**
 * This file load all configuration values from the .env file
 * @author Wisdom Kwarteng
 */
import  convict from "convict"
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'

if (process.env.NODE_ENV === 'development') require('dotenv').config()


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

    CURRENCIES:{
        doc: 'Allowed currencies',
        format: String,
        env: 'CURRENCIES',
        default: process.env.CURRENCIES as string,
      },

      SCHEDULER_INTERVAL:{
        doc: 'Time interval scheduler should run to save prices in database',
        format: String,
        env: 'SCHEDULER_INTERVAL',
        default: "*/3 * * * *",
      }

})
config.validate()
export default config