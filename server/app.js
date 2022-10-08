require("dotenv").config();
const express = require("express");
const cors = require("cors");




const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("<h2>this is homepage</h2>")
})

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })





module.exports = app;