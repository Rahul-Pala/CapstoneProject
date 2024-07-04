let express = require("express"); //Import express application.
let router = express.Router(); //Create a router

let Controllers = require("../controllers"); // index.js
//And now this is controllers object that gets assigned with this kind of my user controllers code.

// Adds a GET route to return all users. //That router will add the endpoints. 
router.get("/", (req, res) => {
  Controllers.cartoonController.getCartoon(res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.cartoonController.createCartoon(req.body, res);
});

// Adds a POST route to create a new user
router.post("/initiate", (req,res) => {
  Controllers.initiateController.storeCartoons(res);
});

router.put('/:id', (req, res) => {
    Controllers.cartoonController.updateCartoon(req, res)
   })
   
   router.delete('/:id', (req, res) => {
    Controllers.cartoonController.deleteCartoon(req, res)
   })

   router.delete('/', (req, res) => {
    Controllers.cartoonController.deleteAllCartoon(req, res)
   })

module.exports = router;
