import axios, { AxiosResponse } from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    }, auth: {
        'username': 'Andre',
        'password': 'password'
    }
}

const Http = axios.create(config);

class Service {
    protected static Http = Http
    protected static getData = getData
}

function getData<T>(res: AxiosResponse<T>) {
    return res.data
}

Http.defaults.baseURL = 'http://localhost:8080'

export default Service