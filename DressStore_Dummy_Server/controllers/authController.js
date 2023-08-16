const { register,login } = require('../services/userService');

const authController = require('express').Router();



authController.post('/login', async (req, res) => {
    const response = await login(req.body.email, req.body.password)
    if (response.status != 200) {
        res.status(response.status).json({ data: response.message });
    }
    else {
        res.json({status: 200, data: response.token });
    }
})

authController.post('/register', async (req, res) => {
    const response = await register(req.body.email, req.body.password)

    if (response.status != 200) {
        res.json({ status: 500, data: response.message });
    }
    else {
        res.json({ status: 200, data: response.token });
    }
})

module.exports=authController;