//configurações axios

import axios from "axios";

export const api = axios.create({
    baseURL: process.env.PROD ? process.env.VITE_API_URL : process.env.VITE_API_URL_LOCAL
});