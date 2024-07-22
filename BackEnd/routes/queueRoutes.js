let express = require("express"); //Import express application.
let router = express.Router(); //Create a router

let Controllers = require("../controllers"); // index.js
//And now this is controllers object that gets assigned with this kind of my Queue controllers code.

// Adds a GET route to return all Queues. //That router will add the endpoints. 
router.get("/", (req, res) => {
  Controllers.queueController.getQueue(res);
});

// Adds a POST route to create a new Queue
router.post("/create", (req, res) => {
  Controllers.queueController.createQueue(req.body, res);
});

// Adds a POST route to create a new Queue
// router.post("/initiate", (req,res) => {
//   Controllers.initiateController.storeQueues(res);
// });

router.put('/:id', (req, res) => {
    Controllers.queueController.updateQueue(req, res)
   })
   
   router.delete('/:id', (req, res) => {
    Controllers.queueController.deleteQueue(req, res)
   })

   router.delete('/', (req, res) => {
    Controllers.queueController.deleteAllQueue(req, res)
   })

module.exports = router;
