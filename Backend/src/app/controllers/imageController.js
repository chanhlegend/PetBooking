const Image = require('../models/Image');

class imageController {
    async getAllImages(req, res) {
        try {
            const images = await Image.find();
            return res.status(200).json(images);
        } catch (error) {
            return res.status(500).json({ message: 'Server error', error });
        }
    }

    async createImage(req, res) {
        try {
            const { url } = req.body;
            const newImage = new Image({
                url
            });
            await newImage.save();
            return res.status(201).json(newImage);
        } catch (error) {
            return res.status(500).json({ message: 'Server error', error });
        }
    }
}   

module.exports = new imageController();
