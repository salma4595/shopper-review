require('dotenv').config()
const cloudinary = require('cloudinary');

exports.upload_single = async (imagePath) => {
    console.log(`uploading: ${imagePath}`);
    return result = await cloudinary.uploader.upload(imagePath);
}

const upload_singleImage = async (imagePath) => {
    return result = await cloudinary.uploader.upload(imagePath);
}

exports.upload_multiple = async (images) => {
    result = [];
    img = "";
    for(const image of images) {
        img = await cloudinary.uploader.upload(image);
        result.push(img.url);
    };
    return result;
}