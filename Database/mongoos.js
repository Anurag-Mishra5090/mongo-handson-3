const mongoos = require("mongoose")

const url = "mongodb+srv://abhimanyupayasi3312:Abhi123@cluster0.bqawe0k.mongodb.net/mongoosdb?retryWrites=true&w=majority"

const connectionn= async()=>{
    await mongoos.connect(url);
    
}
module.exports =connectionn