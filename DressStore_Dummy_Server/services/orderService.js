const Order = require("../models/Order")

async function getAllByUser(userId){
    return await Order.find({userId : userId}).lean();
}

async function addOrder(order){
        return await Order.create(order);
}

module.exports ={
    getAllByUser,
    addOrder,
}