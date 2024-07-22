let express = require("express"); //Import express application.
let router = express.Router(); //Create a router

let Controllers = require("../controllers"); // index.js
//And now this is controllers object that gets assigned with this kind of my Adrenaline controllers code.

// Adds a GET route to return all Adrenalines. //That router will add the endpoints. 
router.get("/", (req, res) => {
  Controllers.adrenalineController.getAdrenaline(res);
});

// Adds a POST route to create a new Adrenaline
router.post("/create", (req, res) => {
  Controllers.adrenalineController.createAdrenaline(req.body, res);
});

// Adds a POST route to create a new Adrenaline
// router.post("/initiate", (req,res) => {
//   Controllers.initiateController.storeAdrenalines(res);
// });

router.put('/:id', (req, res) => {
    Controllers.adrenalineController.updateAdrenaline(req, res)
   })
   
   router.delete('/:id', (req, res) => {
    Controllers.adrenalineController.deleteAdrenaline(req, res)
   })

   router.delete('/', (req, res) => {
    Controllers.adrenalineController.deleteAllAdrenaline(req, res)
   })

module.exports = router;
