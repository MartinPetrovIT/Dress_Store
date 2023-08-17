const { verifyToken, addToCartList, getCartCount, getCartData, 
    changeWishList, changeCartList , getCustomerData, getWishesCount, getWishes
    } = require('../services/userService');

const userController = require('express').Router();



userController.post('/changeWishList', async (req, res) => {
    try {
        const token = req.header('Authorization');
        const decoded = verifyToken(token);
        
        await changeWishList(decoded._id, req.body.products);
        res.json({message: 'changeWishList.' });
    } catch (error) {
        console.error('Error changeWishList', error);
        res.status(500).json({ error: 'Error changeWishList' });
    }
})

userController.post('/addToCart', async (req, res) => {
    try {
        const token = req.header('Authorization');
        const decoded = verifyToken(token);
        
        await addToCartList(decoded._id, req.body.product);
        res.json({message: 'Product added to cart.' });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'An error occurred while adding to cart.' });
    }
})

userController.post('/changeCart', async (req, res) => {
    try {
        const token = req.header('Authorization');
        const decoded = verifyToken(token);
        
        await changeCartList(decoded._id, req.body.products);
        res.json({message: 'cart is changed' });
    } catch (error) {
        res.json({ message: error});
    }
})


userController.get('/cartCount', async (req, res) => {
    try {
        const token = req.header('Authorization');
        const decoded = verifyToken(token);
        
        let count = await getCartCount(decoded._id);
        res.json({count: count });
    } catch {
        res.json({count: 0 });
    }
})

userController.get('/wishCount', async (req, res) => {
    try {
        const token = req.header('Authorization');
        const decoded = verifyToken(token);
        
        let count = await getWishesCount(decoded._id);
        res.json({count: count });
    } catch {
        res.json({count: 0 });
    }
})

userController.get('/customer', async (req, res) => {
    try {
        const token = req.header('Authorization');
        const decoded = verifyToken(token);
        
        let customer = await getCustomerData(decoded._id);
        res.json({customer: customer });
    } catch (error){
        console.log(error)
        res.json({customer: {name: "error"}});
    }
})

userController.get('/cartData', async (req, res) => {
    try {
        const token = req.header('Authorization');
        const decoded = verifyToken(token);
        
        let cartItems = await getCartData(decoded._id);
        res.json({cartItems: cartItems });
    } catch {
        res.json({cartItems: 0 });
    }
})

userController.get('/getWishes', async (req, res) => {
    try {
        const token = req.header('Authorization');
        const decoded = verifyToken(token);
        
        let wishes = await getWishes(decoded._id);
        res.json({wishes: wishes });
    } catch {
        res.json({wishes: 0 });
    }
})

// userController.post('/removeWish', async (req, res) => {
//     const token = req.header('Authorization');

//     const decoded =  verifyToken(token);
    
//     await removeFromWishList(decoded._id, req.body.product);
// })

// userController.post('/removeFromCart', async (req, res) => {
//     const token = req.header('Authorization');

//     const decoded =  verifyToken(token);
    
//     await removeFromCartList(decoded._id, req.body.product);
// })

module.exports=userController;