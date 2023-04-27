const mongoose = require("mongoose")


const stuschema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    Mobile : String,
    email : String
})

const Information = mongoose.model("information",stuschema)

module.exports ={
    Information
}