const { MongoClient, ServerApiVersion } = require("mongodb");


async function getAllFoods (){

   const result = await foodItems.find();
      res.send(result);


    console.log("product controller");

}

module.exports = {
  getAllFoods
};