const { Creator } = require('../models/user');
const { Errors } = require('../models/error');

const profileController= {
    getUserProfile: async (req,res) => {
        try{
            const ShowCreatorProfile = await ShowUserProfile.findAll(
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
 
            res.render('userProfile', {data: User});
 
     } catch (error) {
 console.logerror(error);
 res.status(500).send(error);/** à revoir : penser à faire une view !!! */
     }
 }
 };
 
 { Errors } (req, res) => {
     res.status(404).render('404');
 };

module.exports = profileController;