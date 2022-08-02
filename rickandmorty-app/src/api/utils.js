import axios from "axios";

const API_URL = 'https://rickandmortyapi.com/'
let controller;
const instance = axios.create({ baseURL: API_URL })

export const request = (method, url, data = {}) => {
    if (controller) {
        controller.abort();
    }
    controller = new AbortController()

    let responseType = 'json'
    return instance({
        method,
        url: `api${url}`,
        ...data,
        responseType,
        signal: controller.signal
    }).catch((err) => console.log('error: ', err))
}