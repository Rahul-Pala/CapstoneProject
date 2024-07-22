"use strict";
 let Models = require('../models'); 

 const getAdrenaline = (res) => {
    // finds all Adrenalines. 
    Models.Adrenaline.find({}) 
        .then(data => res.send({result: 200, data: data})) 
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}
 const createAdrenaline = (data, res) => {
    console.log(data)
    new Models.Adrenaline(data).save() 
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}

const updateAdrenaline = (req, res) => {
    // updates the Adrenaline matching the ID from the param using JSON data POSTed in request body
    console.log('Req body',req.body)
    Models.Adrenaline.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteAdrenaline = (req, res) => {
    // deletes the Adrenaline matching the ID from the param
    Models.Adrenaline.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteAllAdrenaline = (req, res) => {
    // deletes the Adrenaline matching the ID from the param
    Models.Adrenaline.deleteMany()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

 module.exports = {
   getAdrenaline, createAdrenaline, updateAdrenaline, deleteAdrenaline, deleteAllAdrenaline
 }