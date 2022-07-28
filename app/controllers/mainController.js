const { themes } = require('./models');


const mainController = {
   home: async (req,res) => {
       try{
           const searchThemesForm = themes.findById({
                 include: ["titleTheme"]
           });

           res.render('home', {searchThemesForm});

    } catch (error) {
console.logerror(error);
res.status(500).send(error);/** à revoir : penser à faire une view !!! */
    }
}
};

notFound: (req, res) => {
    res.status(404).render('404');
};

module.exports = mainController;