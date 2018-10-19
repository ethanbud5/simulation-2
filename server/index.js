require("dotenv").config();
const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const axios = require("axios");
const {getHouses,addHouse,removeHouse} = require("./controllers/houseCtrl")

var app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set("db",dbInstance)
}).catch(err=>console.log(err));

app.get("/api/houses",getHouses);
app.post("/api/house",addHouse);
app.delete("/api/house/:id",removeHouse);


var port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("Listening on port: "+port);
})
