"use strict";
const axios = require('axios');
const Models = require('../models');


const storeCartoons = async (res) => {
    try {

    let response = await axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
    
        const cartoons = response.data;
        console.log(cartoons)

        await Models.Cartoon.insertMany(
            cartoons
          );

       
      res.send("end")
    } catch (err) {
        console.log(err.message)
    }

}

module.exports = {
    storeCartoons
}