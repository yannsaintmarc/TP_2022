const bcrypt = require('bcrypt');
//const emailValidator = require('email-validator');

const { Creator } = require ('../models/creator');

const authController = {
    
/** affichage du formulaire d'inscription - signup form rendering */

    showSignupForm: (_req, res) => {
        res.render('signup');
    },
/** soumission du formulaire - sending signup form */

    handleSignupForm: async (req, res) => {
    try {
        const errors = []
/** tableau des erreurs de soumission des informations de l'utilisateur */

//firstname 

            if (!req.body.firstname || req.body.firstname.lenght === 0) {
                errors.push("inscrivez votre prénom !");
                }
//lasname

            if (!req.body.lastname || req.body.lastname.length === 0) {
                errors.push("inscrivez votre nom !");
                }
//adress

            if (!req.body.adress || req.body.adress.length === 0) {
                errors.push("adresse manquante !");
                }
//town

            if (!req.body.town || req.body.town.length === 0) {
                errors.push("ville manquante !");
                }
//Zip code

            if (!req.body.zipCode || req.body.zipCode.length === 0 || req.body.zipCode != Number) {
                errors.push("code postal erroné !");
                }
//mail

            if (!req.body.mail || req.body.mail.length === 0) {
                errors.push("email non valide");
                }
//phone

            if (!req.body.phone || req.body.phone.length === 0 || req.body.phone != Number) {
                errors.push("numero de téléphone non valide");
                }
//social media

            if (!req.body.sociaMedia || req.body.SocialMedia.length === 0) {
                errors.push("indiquez un média social");
                }
//username

            if (!req.body.userName || req.body.userName.length === 0) {
                errors.push("indiquez un nom d'utilisateur");
                }
//password == confirmed password

            if (!req.body.password !== req.body.passwordConfirm) {
                errors.push("le mot de passe de confirmation ne correspond pas");
                }
//is strong password enough ? (see CNIL criteria)

            if (!req.body.password || req.body.password.length < 8) {
                errors.push("le mot de passe est trop court");
                }
// if error, render view "signup" with errors

            if (errors.length > 0) {
                res.render('signup', {errors});
} else {
/** verify existing user */

    const existingUser = await Creator.findOne({
        where: {
            email: req.body.email
        }
    });

    if (existingUser) {
        res.render('signup', { errors : ["erreur lors de la création!"]});
    } else {

/** if ok, create new user with encrrypt password with bcrypt */

        const hashedPassword = bcrypt.hashSync(req.body.password, 10);

 /** create new Creator and save into database */

        const newCreator = new Creator({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            adress: req.body.adress,
            town: req.body.town,
            zipCode: req.body.zipCode,
            mail: req.body.SocialMedia,
            phone: req.body.phone,
            sociaMedia: req.body.sociaMedia,
            userName: req.body.userName,
            password: req.body.password
        });
        await newCreator.save();
        res.redirect('/');

            }

          }
        }
        catch (error) {
            console.error(error);
            res.status(500).Send(error.message);
        }
    },
/** Login form rendering */

    showLoginForm: (_req, res) => {
        res.render('login');
    },
/** sending login form */

    handleLoginForm: async (req, res) => {
        try {
            const existingUser = await Creator.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (!existingUser) {
                res.render('login');
            } else {
                const validPassword = bcrypt.compareSync(req.body.password,existingUser.password );
                if (!validPassword) {
                    res.render('login');
                } else {
                    req.session.creator = existingUser;
                    res.redirect('/');
                }
            }
         } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
        }
    }

};

module.exports = authController;