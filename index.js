const express = require('express');
const app = express();
const Router = require('./routes/users')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000;
const connectToDB = require('./config/DB');


connectToDB()
app.use(express.json())
app.use('/users',Router)

app.listen(PORT,()=>{
    console.log(`Got the server Up and Running on Port ${PORT}`)
})