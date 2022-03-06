const express = require('express');
const router = express.Router();
const Model = require('../models/userSchema');


router.get('/',async(req,res)=>{
    try{
        const users = await Model.find();
        res.status(200).json(users);
    }catch(e){
        console.log(`Something went wrong, ${e.message}`);
        res.status(400);
    }
})


router.get('/:id',async(req,res)=>{
    const userId = parseInt(req.params.id)
    try{
        const requestedUser = await Model.findOne({id:userId});
        if(!requestedUser){
            res.status(404).send(`User with the id of ${userId} does not exist...`)
            return;
        }
        res.status(200).json(requestedUser)
    }catch(e){
        console.log(`Something went wrong, ${e.message}`);
        res.status(400);
    }
})





router.post('/',async(req,res)=>{
    const payload = req.body;
    try{
        await Model.create(payload);
        res.status(201).send(`User created!`)
    }catch(e){
        console.log(`Something went wrong, ${e.message}`);
        res.status(400).send(e.message);
    }
})


router.put('/:id', async(req,res)=>{
    const userId = parseInt(req.params.id);
    const payload = req.body;
    try{
        const requestedUser = await Model.findOne({id:userId});
        if(!requestedUser){
            res.status(404).send(`User with the id of ${userId} does not exist...`)
            return;
        }
        await Model.replaceOne({id:userId},payload)
        res.status(200).send(`user with the id of ${userId} successfuly updated!`)
    }catch(e){
        console.log(`Something went wrong, ${e.message}`);
        res.send(e.message);
    }
})




router.delete('/:id',async(req,res)=>{
    const userId = parseInt(req.params.id);
    try{
        const exists = await Model.findOne({id:userId});
        if(!exists){
            res.status(404).send(`User with the id of ${userId} does not exist...`)
            return;
        }

        await Model.deleteOne(exists);
        res.status(204).send(`Successfuly deleted user with the id of ${userId}`)

    }catch(e){
        console.log(`Something went wrong, ${e.message}`);
        res.send(e.message);
    }
})



module.exports = router;