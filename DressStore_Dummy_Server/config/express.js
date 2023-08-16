const express = require("express");
const cookieParser = require('cookie-parser');
var cors = require('cors')
// const session = require("../middlewares/session");

module.exports = (app) =>{
    
    app.use(express.json());
    app.use(cors())
    // app.use('/static' , express.static('static'))
    app.use(express.urlencoded({extended: true}))
    app.use(cookieParser())
    //app.use(session())
}