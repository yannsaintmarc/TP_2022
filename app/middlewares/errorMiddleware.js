
const { ValidationError } = require('sequelize');

module.exports = {

    // Les middleware d'erreurs d'express prennent 4 param
    // et sont appelé lorsque qu'on appelle next() avec un paramètre
    errorMiddleware(error, _, response, __) {
        console.log(error);

        // Je peux tester la classe de l'erreur pour voir si c'est une erreur de validation
        // et donc renvoyer une réponse HTTP approprié
        if (error instanceof ValidationError) {

            // La fonction map() permet d'extraire d'une liste
            // certaine propriété
            const errorsMessages = error.errors.map(validationError => {
                // Je choisi d'extraire 2 propriétés les plus utiles pour l'utilisateur de l'API
                // Le message détailé et champ concerné
                return {
                    message: validationError.message,
                    field: validationError.path
                };
            })

            response.status(400).json({ errors: errorsMessages, details: error });
        } else {
            response.status(500).json({ error })
        }

    }

};