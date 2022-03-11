import { isEmptyObject } from "../utils/helpers";

interface IHttpClient{
    
}
interface IHttpConfig{
    queryParams?:{
        [key:string]:string;
    },
    pathParam?:string;
}

function getFullEndpoint (pathname:string) {
    const e = process.env.REACT_APP_NEWS_API_BASEURL
    return e + pathname
}
function addQueryParams(raw_url:string, queryParam:{[key:string]: string}){
    var url = new URL(raw_url);
    if(queryParam){
        Object.getOwnPropertyNames(queryParam).forEach(k => {
            const key = encodeURIComponent(k);
            const value = encodeURIComponent(queryParam[key]);
            // Add key and value as query params to url
            url.searchParams.append(key, value);
        })
    }
    return url   
}

function getAPIKeyUrl (pathname:string){
    const apiKey = process.env.REACT_APP_NEWS_API_KEY as string
    return addQueryParams(pathname, {apiKey})
}
export class httpClient {
    constructor () {
    }

    static getEndpoint(pathname:string, config:IHttpConfig = {}){
        // Get constructed Endpoint
        let endpoint = getFullEndpoint(pathname);
        // Add API Key
        endpoint = getAPIKeyUrl(endpoint).toString();

        // Add queryParams if any
        if(config?.queryParams && !isEmptyObject(config.queryParams)){
            endpoint = addQueryParams(endpoint, config.queryParams).toString()
        }
        return endpoint;
    }

}