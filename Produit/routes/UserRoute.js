const express = require('express');
const router = express.Router();
const  UsersFetcher = require('../services/UserService');
 
//Get ALL

router.get('/', async (req, res) => {
    try {
        const user = await UsersFetcher.getAllUsers();
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/*
router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const user = await UsersFetcher.getUser( "6408e3ced17ef23993723c1b");
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.delete('/:id', async  (req, res)=>{
    try{
        const user = await UsersFetcher.deleteUser("6408e3ced17ef23993723c1b");
        res.json(user);
    }catch (error){
        res.status(500).send(error.message);
    }
});*/
router.get('/:id', async (req, res) => {    
    try {        console.log(req.params.id); 
        const user= await UsersFetcher.getUser(req.params.id);
    res.json(user);   
 } catch (error) {     
       res.status(500).send(error.message);  
      }});

router.delete('/:id', async  (req, res)=>{   
     try{       

        const user = await UsersFetcher.deleteUser(req.params.id);  
        res.json(user);  
      }catch (error){   
        res.status(500).send(error.message);   
                 }});



router.post('/', async  (req, res)=>{ 
    // validate request
    
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    // new user
    try{
 
      const newUser = new User({
        name : req.body.name,
        email : req.body.email,
        gender: req.body.gender,
        status : req.body.status,
        date: req.body.date,
        password : req.body.password

    });
 

    const user = await UsersFetcher.saveUser(newUser);
    res.json(user);}
    catch(error)
    {
        console.log(error.message);
    }

    // save user in the database
   
});

router.put('/:id', async  (req, res)=>{ 
    
    // validate request
console.log(req.params.id);
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
 
 
    const user = await UsersFetcher.updateUser(req.params.id,req.body);
    
    res.json(user);
 

    // save user in the database
   
});

module.exports = {router};
  /*
    const newUser = new User({
  
        name: "El Abdi",
        email: "g@gmail.com",
        gender: "Male",
        status: "client",
        date: "2023-02-24T00:00:00.000Z",
        password: "12345"

    });*/