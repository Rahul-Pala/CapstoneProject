let express = require("express"); //Import express application.
let router = express.Router(); //Create a router

let Controllers = require("../controllers"); // index.js
//And now this is controllers object that gets assigned with this kind of my Show controllers code.

// Adds a GET route to return all Shows. //That router will add the endpoints. 
router.get("/", (req, res) => {
  Controllers.showController.getShow(res);
});

// Adds a POST route to create a new Show
router.post("/create", (req, res) => {
  Controllers.showController.createShow(req.body, res);
});

// Adds a POST route to create a new Show
router.post("/initiate", (req,res) => {
  Controllers.initiateController.storeShows(res);
});

router.put('/:id', (req, res) => {
    Controllers.showController.updateShow(req, res)
   })
   
   router.delete('/:id', (req, res) => {
    Controllers.showController.deleteShow(req, res)
   })

   router.delete('/', (req, res) => {
    Controllers.showController.deleteAllShow(req, res)
   })

module.exports = router;
