const xss = require('xss');

module.exports = {
    // Ce middleware ajoute un header de manière à désactiver ce blocage
    corsMiddleware(_, response, next) {
        response.setHeader('Access-Control-Allow-Origin', '*');
        next();
    },

    // Ce middleware protège notre application en "nettoyant" déventuelle
    // balise html présente dans le body
    xssMiddleware(request, _, next) {
        // On va itérer sur le request.body et appliquer notre fonction de sécurisation

        for (let key in request.body) {
            request.body[key] = xss(request.body[key]);
        }

        next();
    }
}