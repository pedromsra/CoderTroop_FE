//configurações axios

import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.PROD ? import.meta.env.VITE_API_URL : import.meta.env.VITE_API_URL_LOCAL //URL deve sempre ser maiusculo
});