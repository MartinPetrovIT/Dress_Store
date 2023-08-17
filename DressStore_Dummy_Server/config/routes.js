const authController = require("../controllers/authController");
const dataController = require("../controllers/dataController");
const orderController = require("../controllers/orderController");
const userController = require("../controllers/userController");

module.exports =(app)=>{

    app.use('/auth', authController)
    app.use('/data', dataController)
    app.use('/user', userController)
    app.use('/order', orderController)
}