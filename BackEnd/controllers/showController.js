"use strict";
 let Models = require('../models'); 

 const getShow = (res) => {
    // finds all Shows. 
    Models.Show.find({}) 
        .then(data => res.send({result: 200, data: data})) 
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}
 const createShow = (data, res) => {
    console.log(data)
    new Models.Show(data).save() 
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}

const updateShow = (req, res) => {
    // updates the Show matching the ID from the param using JSON data POSTed in request body
    console.log('Req body',req.body)
    Models.Show.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteShow = (req, res) => {
    // deletes the Show matching the ID from the param
    Models.Show.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteAllShow = (req, res) => {
    // deletes the Show matching the ID from the param
    Models.Show.deleteMany()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

 module.exports = {
   getShow, createShow, updateShow, deleteShow, deleteAllShow
 }