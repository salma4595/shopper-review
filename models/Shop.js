const mongoose = require('mongoose');

// TODO... Add reviews
const shopSchema = mongoose.Schema({
    "name": String,
    "category":{
        type:String,
        enum: ['Fashion', 'Electronics', 'Home', 'Entertainment', 'Health', 'Jewelry', 'Sports', 'Food'], // Add your predefined categories here
        required: true,
    },
    "mall":
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Mall'
        },
    "location": String,
    "description": String,
    "thumbnail": String,
    "images": [
        {
            type: String
        }
    ],
    "workingHours": String,
    "contactNumber": Number,
    "rating": Number
},
{
    timestamps: true
})

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;