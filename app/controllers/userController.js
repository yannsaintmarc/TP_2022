//const bcrypt = require('bcrypt');

const { User } = require('../models');


module.exports = {
    async userProfile(req,res) {
        try {
            const getUserProfile = await User.findByPk(

            {
                  include:
                [
                'firstnamme',
                'lastname',
                'avatar',
                'adresse',
                'town',
                'zipcode',
                'email',
                'phone',
                'creation_date',
                'socialNetwork'
                ]
            }

        );
 
            res.json({ data: getUserProfile });
 
     } catch (error) {
        console.error(error);
     }
    },

    async createUser(req,res) {
        try {

        // verify if existing user in database

            const existingUser = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
        // if user already exist : error
            if (existingUser) {
                res.json({Error})
            } else {
                // compare password to hashed password in BDD
    const validPassword = bcrypt.copareSync(req.body.password, existingUser);
                // if is wrong
    if (!validPassword) {
        res.render('login');
    } else {
                // connect 
                // keep user connected
    req.session.user = existingUser;
    req.redirect('/');
    }
    // TODO : terminer cette partie !!! 
            }

            const newUserProfile = new User (
                {
                    firstname: req.body.firstnamme,
                    lastname: req.body.lastname,
                    avatar: req.body.avatar,
                    adresse: req.body.adresse,
                    town: req.body.town,
                    zipcode: req.body.town,
                    email: req.body.email,
                    password: hashedPassword,
                    phone:req.body.phone,
                    socialNetwork: req.body.socialNetwork
                }
            );

        await newUserProfile.save();  
                res.redirect('/');

        res.json({ data: newUserProfile });

            } catch (error) {
            console.error(error);
            res.status(500).send(error);
            }
    },
        
    async updateUser(req,res) {
        try {
            const updatedUser = req.body;

            if (updatedUser.firstname) {
                User.firstname = updatedUser.firstname;
            }
            if (updatedUser.lastname) {
                User.lastname = updatedUser.lastname;
            }
            if (updatedUser.avatar) {
                User.avatar = updatedUser.avatar;
            }
            if (updatedUser.adresse) {
                User.adresse = updatedUser.adresse;
            }
            if (updatedUser.town) {
                User.town = updatedUser.town;
            }
            if (updatedUser.adresse) {
                User.zipcode = updatedUser.adresse;
            }
            if (updatedUser.adresse) {
                User.email = updatedUser.email;
            }
            if (updatedUser.adresse) {
                User.password = updatedUser.password;
            }
            if (updatedUser.adresse) {
                User.phone = updatedUser.phone;
            }
            if (updatedUser.adresse) {
                User.socialNetwork = updatedUser.socialNetwork;
            }
            await User.save();

        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async deleteUser (req,res) {
        const UserId = req.params.id;
        try {
            const Users = await User.findByPk(UserId);
            if (!Users) {
                res.status(404).json({
                    error: " bad news : we didn't found user profile "
                });
            }
        } catch (error) {
        console.error(error);
            res.status(500).send(error);
        }
    }
};
