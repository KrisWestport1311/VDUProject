const mongoose = require("mongoose")

const LocationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    county:{
        type:String,
        required:true,
    },
    contactperson:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    phonenumber:{
        type:String,
        required:true,
        unique:true,
    },
    emailaddress:{
        type:String,
        required:true,
    },
    
    
},
    {timestamps:true}

    
    
);

module.exports = mongoose.model("Location", LocationSchema) 