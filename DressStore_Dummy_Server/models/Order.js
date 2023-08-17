const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderDate: {
        type: String
    },
    products: {
        type: Array
    },
    totalPrice: {type: Number},
    phone: {type: String},
    email: {type: String},
    name :{type: String},
    familyName :{type: String},
    address :{type: String},
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
