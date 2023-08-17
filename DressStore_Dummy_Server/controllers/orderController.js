const { getAllByUser, addOrder,
} = require('../services/orderService');

const { verifyToken,
} = require('../services/userService');

const orderController = require('express').Router();

orderController.get('/getAllByUser', async(req,res)=>{
    try {
        const token = req.header('Authorization');
        const decoded = verifyToken(token);
        let response = await getAllByUser(decoded._id);
        res.json({orders: response });
    } catch (error) {
        console.error('Error getting orders:', error);
        res.status(500).json({ error: 'Error getting orders.' });
    }
})

orderController.post('/addOrder', async (req, res) => {
    try {
        const token = req.header('Authorization');
        const decoded = verifyToken(token);
         let order  = req.body.order;
         order.userId = decoded._id;
        await addOrder(order);
        res.json({message: 'The new order is added' });
    } catch (error) {
        console.error('Error adding order:', error);
        res.status(500).json({ error: 'Error adding order.' });
    }
})


module.exports=orderController;