const { Users } = require('../models');
//const { Errors } = require('../models/error');

module.exports = {
    async getUserProfile(req,res) {
        try {
            const UserProfile = await Users.findOne(
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
                'socialNetwork'
                ]
            }

        );
 
            res.json({data: users});
 
     } catch (error) {
 console.logerror(error);
 res.status(500).send(error);
     }
 }
 };
 
 /**{ Errors } (req, res) => {
     res.status(404).json('404');
 };*/
