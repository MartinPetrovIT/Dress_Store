// // const { register,login } = require('../services/userService');
// // const { parserError } = require('../util/parser');

// const authController = require('express').Router();

// authController.post('/login', async (req,res)=>{
//     if(req.user)
//     {
//        return res.redirect("/")
//     }
//     try{
//         if(req.body.email == '' || req.body.password == '')
//         {
//             throw new Error('All fields are required')
//         }

//         const token = await login(req.body.email, req.body.password)
        
//         res.cookie('token', token)
//         res.redirect('/')
//     }catch(err){

//         const eroos = parserError(err)
//         res.render('login',{
//             title: ' Page',
//             eroos,
//             body:{
//                 email: req.body.email
//             }
//         })
//     }
// })

// authController.post('/register', async (req,res)=>{
//     if(req.user)
//     {
//        return res.redirect("/")
//     }
//     try{

//         if(req.body.username == ''  || req.body.email == '' || req.body.password == '')
//         {
//             throw new Error('All fields are required')
//         }
//         if(req.body.password != req.body.rePassword)
//         {
//             throw new Error('Password do not match')
//         }

//         const token = await register(req.body.username, req.body.password, req.body.email)
        
//         res.cookie('token', token)
//         res.redirect('/')
//     }catch(err){

//         const eroos = parserError(err)
//         res.render('register',{
//             title: 'Register Page',
//             eroos,
//             body:{
//                 email: req.body.email
//             }
//         })
//     }
// })

// module.exports=authController;