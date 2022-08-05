/** creation d'un middleware d'erreurs */

class Errors extends Model {

    errorMiddleware(error, res, req, next) {
        console.log(error);
        if ( error instanceof validationError) {
            const errorsMessages = error.errors.map(validationError => {
                return {
                    message: this.validationError.message,
                    field: validationError.path
                };
            })
            res.status(400).json({ errors: errorsMessages, details: error});
        } else {
            res.status(500).json({error})
        }
    }
};

module.exports = Errors;