const { Themes } = require('../models/themes');
const { Errors } = require('../models/error');


const mainController = {
   home: async (req,res) => {
       try{
           const searchThemesForm = searchThemesForm.findById(
            {
                 include: ["titleTheme"]
            }
        );

           res.render('home', {data: Themes});

    } catch (error) {
console.logerror(error);
res.status(500).send(error);
        }
    }
};

{ Errors } (_req, res) => {
    res.status(404).render('404');
};

module.exports = mainController;