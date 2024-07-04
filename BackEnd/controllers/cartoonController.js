"use strict";
 let Models = require('../models'); 

 const getCartoon = (res) => {
    // finds all Cartoons. 
    Models.Cartoon.find({}) 
        .then(data => res.send({result: 200, data: data})) 
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}
 const createCartoon = (data, res) => {
    console.log(data)
    new Models.Cartoon(data).save() 
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}

const updateCartoon = (req, res) => {
    // updates the Cartoon matching the ID from the param using JSON data POSTed in request body
    console.log('Req body',req.body)
    Models.Cartoon.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteCartoon = (req, res) => {
    // deletes the Cartoon matching the ID from the param
    Models.Cartoon.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteAllCartoon = (req, res) => {
    // deletes the Cartoon matching the ID from the param
    Models.Cartoon.deleteMany()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

 module.exports = {
   getCartoon, createCartoon, updateCartoon, deleteCartoon, deleteAllCartoon
 }