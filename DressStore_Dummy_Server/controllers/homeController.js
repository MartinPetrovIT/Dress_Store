
const homeController =require('express').Router()

homeController.get('/', async (req,res)=>{
    const username = res.locals.username
    console.log(username)
    res.render('home',{
    })
})

module.exports = homeController;