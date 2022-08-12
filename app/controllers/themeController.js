// on veut afficher une liste de médias avec un titre une date, et une image
const { Themes, Medias } = require('../models');


module.exports = {
//GET ALL
    async getAllThemes(_req,res,next) {
    try {
        const ThemesList = await Themes.findAll(
        {
            include:
            [
            'titletheme',
            'day',
            'image'
            ]
        }
        
        );

        res.json({ data: ThemesList });

    } catch (error) {
        next(error);
    }

},

//GET ONE
    async getOneTheme(_req,res,next) {
            try {
                const oneTheme = await Themes.findByPk(
                {
                    include:
                    [
                    'titletheme',
                    'day',
                    'image',
                    'theme_presentation'
                    ]
                }
                    );

            res.json({ data: oneTheme });

    } catch(error) {
        next(error)
        }

            },

//POST
            async createTheme(req,res) {

                const ThemeData = {
                        theme_presentation: req.body.theme_presentation,
                        day: req.body.day,
                        image: req.body.image
                };
        
                try {
                    const newTheme = await Medias.create(ThemeData);
                    res.status(201).json({ data: newTheme });
                } catch (error) {
                    console.log('error');
                };
            },

//PATCH

        async updateTheme(req,res) {
            try {
                const ThemeId = req.params.id;
                const updateTheme = await Workspace.findByPK(ThemeId);
                res.json({ data: updateTheme});
                if(updateTheme) {
                    await updateTheme.update(req.body);
                    return response.json(updateTheme);
                }
            } catch (error) {
            console.error(error);
            };

        },

//DELETE

        async deleteTheme(req,res,next) {
            try {
                // verify if existing medias in Theme
    
                const containingMedias = await Medias.findAll();
                if (containingMedias) {
                    res.status(404).json({errors: "medias allready exists !"});
                } else {
                    next(error)
                }
                const ThemeId = req.params.id;
                const deletedTheme = await Themes.findByPk(ThemeId);
                if (!deletedTheme){
                    res.status(404).json({errors: "no theme found"});
                    return;
                }
    
                await deletedTheme.destroy();
                req.json({ status: "theme erased" });
                
            } catch (error) {
            console.error(error);
            }
        }

        },

    

    };

