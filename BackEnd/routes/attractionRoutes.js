let express = require("express"); //Import express application.
let router = express.Router(); //Create a router

let Controllers = require("../controllers"); // index.js
//And now this is controllers object that gets assigned with this kind of my Attraction controllers code.

// Adds a GET route to return all Attractions. //That router will add the endpoints. 
router.get("/", (req, res) => {
  Controllers.attractionController.getAttraction(res);
});

// Adds a POST route to create a new Attraction
router.post("/create", (req, res) => {
  Controllers.attractionController.createAttraction(req.body, res);
});

// Adds a POST route to create a new Attraction
router.post("/initiate", (req,res) => {
  Controllers.initiateController.storeAttractions(res);
});

router.put('/:id', (req, res) => {
    Controllers.attractionController.updateAttraction(req, res)
   })
   
   router.delete('/:id', (req, res) => {
    Controllers.attractionController.deleteAttraction(req, res)
   })

   router.delete('/', (req, res) => {
    Controllers.attractionController.deleteAllAttraction(req, res)
   })

module.exports = router;
