const mongoose = require('mongoose');

// TODO... Add reviews
const shopSchema = mongoose.Schema({
    "name": String,
    "category": String,
    "mall": [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Mall'
        }
    ],
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