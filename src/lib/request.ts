import axios from "axios"
import axiosRetry from 'axios-retry'


 const retryLimit = 3
 
 axiosRetry(axios, { retries: retryLimit })
 
export const request = axios