"use strict";
const axios = require('axios');
const Models = require('../models');


const storeAttractions = async (res) => {
    try {

    let response = await axios.get('http://localhost:3000/attractions')
    
        const attractions = response.data;
        console.log(attractions)

        await Models.Attraction.insertMany(
            attractions
          );

       
      res.send("end")
    } catch (err) {
        console.log(err.message)
    }

}

module.exports = {
    storeAttractions
}