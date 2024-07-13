"use strict";
 let Models = require('../models'); 

 const getAttraction = (res) => {
    // finds all Attractions. 
    Models.Attraction.find({}) 
        .then(data => res.send({result: 200, data: data})) 
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}
 const createAttraction = (data, res) => {
    console.log(data)
    new Models.Attraction(data).save() 
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}

const updateAttraction = (req, res) => {
    // updates the Attraction matching the ID from the param using JSON data POSTed in request body
    console.log('Req body',req.body)
    Models.Attraction.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteAttraction = (req, res) => {
    // deletes the Attraction matching the ID from the param
    Models.Attraction.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteAllAttraction = (req, res) => {
    // deletes the Attraction matching the ID from the param
    Models.Attraction.deleteMany()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

 module.exports = {
   getAttraction, createAttraction, updateAttraction, deleteAttraction, deleteAllAttraction
 }