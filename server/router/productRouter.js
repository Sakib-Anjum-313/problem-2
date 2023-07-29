const express = require("express");


// internal import 
const router = express.Router();
const {
  getAllFoods
} = require("../controller/productController");


// Admin Router
// get methods
router.get("/allFoods", getAllFoods);

// post 


// put methods

// delete methods


module.exports = router;