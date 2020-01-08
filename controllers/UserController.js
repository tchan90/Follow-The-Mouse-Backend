const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const Users = require('../models/userModel');
const validateRegister = require('../validation/register');
const validateLogin = require('../validation/login')

module.exports = {
    //get Users
    async getUsers(req,res){
        try {
            const users = await Users.find()
            res.send(users)
        }catch (error){
            res.status(500).send({
                error:'An error occured getting the users'
            })
        }
    },
    //post User
    async postRegister(req,res){
        const {errors, isValid} = validateRegister(req.body)
        //check Validation
        if(!isValid){
            return res.status(400).json(errors);
        }
        Users.findOne({email:req.body.email})
        .then(user=>{
            if(user){
                errors.email = 'Email already exists';
                return res.status(400).json(errors.email)
            }else{
                const newUser = new Users({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                });
                bcrypt.genSalt(10, (err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash) => {
                        if(err) throw err;      //catch errors
                        newUser.password=hash;
                        newUser.save()      //save into database
                            .then(user=>res.json(user))
                            .catch(err=>console.log(err));  //error if password not entered
                    })
                });
            }
        })
    },
    async loginUser(req,res){
        const {errors, isValid} = validateLogin(req.body);
       const email = req.body.email;
     const password = req.body.password;
            //Check Validation
        if(!isValid){
            return res.status(400).json(errors);
        }

    //Find user by email
    User.findOne({email}).then(user => {
        //Check for user
        if(!user){
            return res.status(404).json({email:'User not found'});
        }
        //Check password
        bcrypt.compare(password,user.password).then(isMatch => {
            if(isMatch){ 
              //res.json({msg:'Success'});
              //User Matched. Payload contains all users info
              const payload = {id:user.id, name:user.name};
              //Sign Token - go to config folder => keys.js and make a secretkey so that the token is retrieved
              // Giving the user the key and token
              //key expires in an hour
              jwt.sign(payload, keys.secretOrKey,{expiresIn:3600},(err,token)=> {
                  res.json({
                      success:true,
                      token: 'Bearer ' + token  //receive token if login successful
                  })
              }) 
        }   else{
              return res.status(400).json({password:'Password Incorrect'});
            }
        })
    })
    }
}