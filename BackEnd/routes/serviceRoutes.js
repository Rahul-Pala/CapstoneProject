let express = require("express"); //Import express application.
let router = express.Router(); //Create a router

let Controllers = require("../controllers"); // index.js
//And now this is controllers object that gets assigned with this kind of my Service controllers code.

// Adds a GET route to return all Services. //That router will add the endpoints. 
router.get("/", (req, res) => {
  Controllers.serviceController.getService(res);
});

// Adds a POST route to create a new Service
router.post("/create", (req, res) => {
  Controllers.serviceController.createService(req.body, res);
});



router.put('/:id', (req, res) => {
    Controllers.serviceController.updateService(req, res)
   })
   
   router.delete('/:id', (req, res) => {
    Controllers.serviceController.deleteService(req, res)
   })

   router.delete('/', (req, res) => {
    Controllers.serviceController.deleteAllService(req, res)
   })

module.exports = router;
