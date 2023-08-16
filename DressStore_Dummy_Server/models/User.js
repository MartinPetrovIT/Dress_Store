const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    email: {type: String},
    password :{type: String},
    name :{type: String},
    familyName :{type: String},
    address :{type: String},
    phone: {type: String},
    wishList: {type: []}, 
    cartList: {type: []}, 
    category: {type: String},
    price: {type: Number},
    type: {type: String}
})

const Dress = model('User', userSchema);

module.exports = Dress;