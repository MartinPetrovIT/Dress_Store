const { getAll } = require('../services/dressService');
// const { create, getById, update, deleteById, buy } = require('../services/toyService')
// const { getAll } = require('../services/toyService');
// const { parserError } = require('../util/parser');

// const { hasUser } = require("../middlewares/guards");
const dataController = require('express').Router();

dataController.get('/dress',async (req,res)=>{
  res.status(200).send(
    await getAll()
  )
})

// toyController.get('/catalog',async (req,res)=>{
//     const toys = await getAll();
//     res.render('catalog',{
//         title: 'Catalog ',
//         toys
//     })
// })

// toyController.get('/:id/details',async (req,res)=>{
//     const toy = await getById(req.params.id);

//     if(req.user)
//     {
//         toy.hasUser = true;
//         if(toy.owner == req.user._id)
//         {
            
//             toy.isOwner = true;
//         }else if(toy.usersBoughtTheToy.some( x => x ==  req.user._id))
//         {
//             toy.wasBought = true
//         }
//     }
//         res.render('details',{
//         title: 'details',
//         toy

//     })
// })
// toyController.post('/create',async (req,res)=>{
//     if(!req.user)
//     {
//        return res.redirect("/auth/login")
//     }
//     const toy = {
//         title : req.body.title,
//         charity : req.body.charity,
//         image : req.body.image,
//         description : req.body.description,
//         category : req.body.category,
//         price : Number(req.body.price),
//         owner : req.user._id,
//     }

//     try {
//         await create(toy)
//         res.redirect('/toy/catalog')
//     } catch (err) {
//         console.log(err)
//         const eroos = parserError(err)
//        res.render('create',
//        {
//          title: 'Create toy',
//          toy,
//          eroos
//     })
        
//     }
// })

// toyController.get('/:id/edit',async (req,res)=>{
//     if(!req.user)
//     {
//        return res.redirect("/auth/login")
//     }
//     const toy = await getById(req.params.id);
//     res.render('edit',{
//         title: 'edit',
//         toy

//     })
// })

// toyController.post('/:id/edit',async (req,res)=>{
//     if(!req.user)
//     {
//        return res.redirect("/auth/login")
//     }
//     const toy = await getById(req.params.id);
//     const edited = {
//         title : req.body.title,
//         charity : req.body.charity,
//         description : req.body.description,
//         category : req.body.category,
//         price : Number(req.body.price)
//     }

//     try {
//         if(Object.values(edited).some( v => !v))
//         throw new Error('All fields are required')
        

//         await update(req.params.id , edited)

//         res.redirect(`/toy/${req.params.id}/details`)
//     } catch (err) {
//         console.log(err)
//         res.render('edit',
//         {
//           title: ' toy',
//          toy : Object.assign(edited, {_id: req.params.id}),
//          errors : parserError(err)
//         })
        
//     }


    
// })


// toyController.get('/:id/delete',async (req,res)=>{
//     if(!req.user)
//     {
//        return res.redirect("/auth/login")
//     }
//     const toy = await getById(req.params.id);

//         if(toy.owner != req.user._id)
//         {
//             return res.redirect('/auth/login')
//         }
        
//         await deleteById(req.params.id)
//         return res.redirect('/toy/catalog')
// })

// toyController.get('/:id/buy',async (req,res)=>{
//     if(!req.user)
//     {
//        return res.redirect("/auth/login")
//     }

//     const toy = await getById(req.params.id);

//     try {
//         if(toy.owner == req.user._id)
//         {
//             throw new Error("Camt buy your own things")
//         }
//         await buy(req.params.id, req.user._id)
//         return res.redirect('/')
        
//     } catch (err) {
//         const eroos = parserError(err)
//         res.render('details',
//         {
//          title: ' toy',
//          toy,
//          eroos
//         })
//     }
        
// })

module.exports=dataController;