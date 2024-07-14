"use strict";
const axios = require('axios');
const Models = require('../models');


const storeShows = async (res) => {
    try {

    let response = await axios.get('http://localhost:3000/show')
    
        const Shows = response.data;
        console.log(Shows)

        await Models.Show.insertMany(
            shows
          );

       
      res.send("end")
    } catch (err) {
        console.log(err.message)
    }

}

module.exports = {
    storeShows
}