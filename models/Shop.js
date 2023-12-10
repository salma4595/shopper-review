const mongoose = require('mongoose');

// TODO... Add reviews
const shopSchema = mongoose.Schema({
    "category": String,
    "id": Number,
    "mallId": Number,
    "location": String,
    "description": String,
    "images": [
        {
            type: String
        }
    ],
    "workingHours": String,
    "contactNumber": Number
},
{
    timestamps: true
})

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;