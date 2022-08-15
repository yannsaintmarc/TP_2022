const xss = require('xss');

module.exports = {
    
    corsMiddleware(_, response, next) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        next();
    },

    xssMiddleware(request, _, next) {
        for (let key in request.body) {
            request.body[key] = xss(request.body[key]);
        }

        next();
    }
}