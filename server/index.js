
// db id: arits
// pass: i5IH0G1qXkrOiBJd

//internal imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const PORT = 6000;
const MONGODB_URI = "mongodb+srv://arits:i5IH0G1qXkrOiBJd@cluster0.ugneq5l.mongodb.net/?retryWrites=true&w=majority"
const productRouter = require("./router/productRouter");


// Internal Import


// request parsers
app.use(cors());
app.use(express.json());


// database connection

// mongoose
  // .connect("mongodb+srv://arits:i5IH0G1qXkrOiBJd@cluster0.ugneq5l.mongodb.net/?retryWrites=true&w=majority", {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  // .then(() => console.log("database connection successful !!!"))
  // .catch((err) => console.log(err));

  const client = new MongoClient((MONGODB_URI), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});


async function run(){
  try {
    await client.connect();
    console.log("database connected succesfully");
    const database = client.db("Problem-2");
    const foodItems = database.collection("foodItems");

     // routing setup
    app.get("/foods", productRouter);


    app.get("/", async(req, res)=>{
      console.log("data hitted");
     });
    
  } catch (error) {
    console.log(error);
  }
}
run();


// port listening
app.listen(PORT, () => {
  console.log(`My Server listening at ${PORT}`);
  console.log("Server running successfully");
});