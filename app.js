const express = require("express")
const bodyParser = require("body-parser")
const connectionn = require("./Database/mongoos")

const routeee = require("./Route/student")

const app=express()

app.use(bodyParser.json());
app.use(routeee);


app.listen(6060,async ()=>{
 console.log("Server is running on port 6060");
 await connectionn();
})

