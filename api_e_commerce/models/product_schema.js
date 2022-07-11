const mongoose = require('mongoose');

const userss = new mongoose.Schema({
    product_name:{
        type:String
    },
    product_image:{
        type:String
    },
    product_price:{
        type:String
    },
    product_description:{
        type:String
    }
})

const userschemaa = new  mongoose.model('userschemaa',userss);

module.exports = userschemaa;