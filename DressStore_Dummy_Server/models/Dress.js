const {Schema, model} = require('mongoose')

const dressSchema = new Schema({
    gender: {type: String},
    brand :{type: String},
    name :{type: String},
    sizes :{type: []},
    imageUrls: {type: []},
    colors:{type: []},
    description: {type: String},
    category: {type: String},
    price: {type: Number},
    type: {type: String}
})

const Dress = model('Dress', dressSchema);

module.exports = Dress;