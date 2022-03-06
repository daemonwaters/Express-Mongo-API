const mongoose = require('mongoose');

const connectToDB = async ()=>{
    try{
        await mongoose.connect(process.env.URI_STRING,()=>{
            console.log('Connected to the DataBase...!')
        })
    }catch(e){
        console.log(`There's an Error : ${e}`)
    }   
}

module.exports = connectToDB;