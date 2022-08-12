const { Medias } = require('../models');

module.exports = {

// GET ALL MEDIAS

    async getAllMedias(req,res) {

        try {
            const MediasList = await Medias.findAll(
            {
            include:
            [
                'titleMedia',
                "author",
                'image_media'
                ]
            }    
        );
        res.json({data: MediasList});
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
            }
    },

// GET ONE MEDIA

    async getOneMedia(_req,res,next) {
        try{
            const Media = await Medias.findByPk(
            {
                  include:
                [
                'titleMedia',
                "author",
                'day',
                'type',
                'material',
                'size',
                'weigth',
                'media_presentation',
                'image_media'
                ]
            }
                );
 
                res.json({ data: Media });
     
        } catch (error) {
            next(error);
        };
            },

// POST MEDIAS

    async createMedia(req,res,next) {

        const MediaData = {
            
                titleMedia: req.body.titleMedia,
                author: req.body.author,
                day:req.body.day,
                type:req.body.type,
                material:req.body.material,
                size_height:req.body.size_height,
                size_width:req.body.size_width,
                weigth:req.body.weigth,
                media_presentation: req.body.media_presentation,
                image_media:req.body.image_media
        };

        try {
            const newMedia = await Medias.create(MediaData);
            res.status(201).json({data: newMedia})
        } catch (error) {
            next(error);
        };
    },

// PATCH MEDIAS

async updateMedia(req,res) {
    try {
        const MediaId = req.params.id;
        const updatedMedia = await Medias.findByPK(MediaId);
        res.json({ data: updatedMedia});
        if(updatedMedia) {
            await updatedMedia.update(req.body);
            return response.json(updatedMedia);
        }
    } catch(error) {
        next(error);
    };
},

// DELETE MEDIA

async deleteMedia(req,res) {
    try {
        // verify if existing medias in theme

        const containingMedia = await Medias.findAll();
        if (containingMedia) {
            res.json({Error})
        } else {
            next(error)
        }

        // it's OK, let's go on
    
        const MediaId = req.params.id;
        const deletedMedia = await Medias.findByPk(MediaId);
        if (!deletedMedia){
            res.status(404).json({errors: "no media found"});
            return;
        }

        await deletedMedia.destroy();
        req.json({ status: "media erased" });
    } catch (error) {
        console.error(error);
    };
}


};