//configurações axios

import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3003" //URL deve sempre ser maiusculo
});