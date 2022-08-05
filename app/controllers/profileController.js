const { Creator } = require('../models/creator');
const { Errors } = require('../models/error');

const profileController= {
    getCreatorProfile: async (req,res) => {
        try{
            const ShowCreatorProfile = await ShowCreatorProfile.findAll(
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
 
            res.render('creatorProfile', {data: Creator});
 
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