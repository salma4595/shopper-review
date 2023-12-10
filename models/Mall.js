const mongoose= require('mongoose')

const mallSchema = mongoose.Schema({
    nameOfMall:String,
    rating: Number,
    location:String,
    openingHour:String,
    PhoneNumber: Number,
    MallImages: [
        {
        type:String,
        }
    ],
    }, {
        timestamps: true, //create date and update date 
    });
    
    //Creating models 
    const Mall= mongoose.model("Mall", mallSchema);






//Exports
module.exports= {Mall};