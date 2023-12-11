require('dotenv').config()
const cloudinary = require('cloudinary');

exports.upload_single = async (imagePath) => {
    return result = await cloudinary.uploader.upload(imagePath);
}