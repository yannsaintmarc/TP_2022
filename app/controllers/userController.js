const { Users } = require('../models');
const { Errors } = require('../middlewares/errorMiddleware');

module.exports = {
    async getUserProfile(req,res) {
        try {
            const getUserProfile = await getUserProfile.findOne(
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
 
            res.json({data: Users});
 
     } catch (error) {
 console.logerror(error);
 res.status(500).send(error);
     }
 }
 };
 
{ Errors } (req, res) => {
     res.status(404).json('404');
 };
