"use strict";
 let Models = require('../models'); 

 const getService = (res) => {
    // finds all Services. 
    Models.Service.find({}) 
        .then(data => res.send({result: 200, data: data})) 
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}
 const createService = (data, res) => {
    console.log(data)
    new Models.Service(data).save() 
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}

const updateService = (req, res) => {
    // updates the Service matching the ID from the param using JSON data POSTed in request body
    console.log('Req body',req.body)
    Models.Service.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteService = (req, res) => {
    // deletes the Service matching the ID from the param
    Models.Service.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteAllService = (req, res) => {
    // deletes the Service matching the ID from the param
    Models.Service.deleteMany()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

 module.exports = {
   getService, createService, updateService, deleteService, deleteAllService
 }