exports.interceptor_log = function(request, response, next){
    console.log("===================================================")
    console.log(`Petición recibida: ${request.method} ${request.url}`)
    next()
}