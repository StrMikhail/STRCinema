import axios from 'axios';
import configFile from '../utils/config.json';

type HTTP = {
    config : string
}

const http = axios.create({
    baseURL: configFile.apiEndpoint,
    headers: {
        'X-API-Key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json',
    },
});

http.interceptors.request.use(
    async function (config: any) {
        if (configFile.isFireBase) {
            const containSlash = /\/$/gi.test(config.url);
            config.url = (containSlash ? config.url.slice(0, -1) : config.url) + '.json';
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);
function transformData(data: any) {
    return data && !data._id
        ? Object.keys(data).map((key) => ({
              ...data[key],
          }))
        : data;
}
http.interceptors.response.use(
    (res) => {
        if (configFile.isFireBase) {
            res.data = { content: transformData(res.data) };
        }
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response && error.response.status >= 400 && error.response.status < 500;
        if (!expectedErrors) {
            console.log(error);
        }
        return Promise.reject(error);
    },
);

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch,
};
export default httpService;
