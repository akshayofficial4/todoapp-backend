const express = require("express");
const mongoose = require("mongoose");
const cors  = require("cors");
const dotenv = require("dotenv");
const todoRoutes = require('../routes/todoRoutes');
dotenv.config();

const app = express();

// middleware setup..

app.use(cors());

app.use(express.json());
 
//routes..

app.use("/api/todos", todoRoutes);

// connecting mongoDB...

const PORT = process.env.PORT || 5000

try {

  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to mongoDB");
  
    app.listen(PORT, () => console.log(`server is running on ${PORT}`))
  })
  
} catch (error) {
  console.log(error)
}


