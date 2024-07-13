"use strict";
 let Models = require('../models'); 

 const getQueue = (res) => {
    // finds all Queues. 
    Models.Queue.find({}) 
        .then(data => res.send({result: 200, data: data})) 
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}
 const createQueue = (data, res) => {
    console.log(data)
    new Models.Queue(data).save() 
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })  
}

const updateQueue = (req, res) => {
    // updates the Queue matching the ID from the param using JSON data POSTed in request body
    console.log('Req body',req.body)
    Models.Queue.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteQueue = (req, res) => {
    // deletes the Queue matching the ID from the param
    Models.Queue.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

   const deleteAllQueue = (req, res) => {
    // deletes the Queue matching the ID from the param
    Models.Queue.deleteMany()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    }) 
   }

 module.exports = {
   getQueue, createQueue, updateQueue, deleteQueue, deleteAllQueue
 }