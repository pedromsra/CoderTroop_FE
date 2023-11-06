//configurações axios

import axios from "axios";

export const api = axios.create({
    baseURL: "https://codertroop-api.onrender.com" //URL deve sempre ser maiusculo
});