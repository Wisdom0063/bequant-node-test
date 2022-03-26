"use strict"
import config from './config';
import { connect } from './lib';
connect(config.get("DB_URL")).then(() => require("./app"))