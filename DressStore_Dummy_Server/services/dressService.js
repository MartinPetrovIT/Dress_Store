const Dress = require("../models/Dress")

async function getAll(){
    return await Dress.find({}).lean();;
}
async function getLast(){
    return await Dress.find({}).sort({key: -1}).limit(3).lean();
}
async function getById(id){
    return Dress.findById(id).lean();
}
async function create(Dress){
    return await Dress.create(Dress);
}
async function update(id, Dress){
    var fromdb = await  Dress.findById(id);
     
    fromdb.title = Dress.title
    fromdb.charity  = Dress.charity
    fromdb.description = Dress.description
    fromdb.category = Dress.category
    fromdb.price = Dress.price

    await  fromdb.save();
}

async function deleteById(id){
    return Dress.findByIdAndRemove(id);
}

// async function buy(DressId, userId){
//     var fromdb = await  Toy.findById(toyId);
//     console.log(toyId)
//     console.log(userId)
//     if(fromdb.usersBoughtTheToy.includes(userId))
//     throw new Error("Cant buy twice")

//     fromdb.usersBoughtTheToy.push(userId)
//   await fromdb.save()
// }
module.exports ={
    getAll,
    getById,
    create,
    update,
    getLast,
    //buy,
    deleteById,
}