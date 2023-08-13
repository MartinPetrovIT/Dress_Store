const {Schema, model} = require('mongoose')

const dressSchema = new Schema({
    id:{type: Number},
    gender: {type: String},
    brand :{type: String},
    name :{type: String},
    size :{type: String},
    imageUrls: {type: []},
    description: {type: String},
    category: {type: String},
    price: {type: Number},
    type: {type: String}
})

const Dress = model('Dress', dressSchema);

module.exports = Dress;