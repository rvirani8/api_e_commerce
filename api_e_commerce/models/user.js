const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    confirm_password:{
        type:String
    }
})

const user = new mongoose.model('user',userschema);

module.exports = user ;