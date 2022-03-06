const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id : {
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    username:String,
    email:String,
});


module.exports = mongoose.model('User',userSchema);


