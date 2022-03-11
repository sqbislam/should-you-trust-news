enum HTTP_METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT"
}

export const apiEndpoints = {

    topHeadlines:{
        path:"top-headlines",
        method:HTTP_METHODS.GET
    }
}