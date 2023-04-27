const {Information} = require("../model/student");


const insertData = async (req,res)=>{
    const studata= req.body;

    const info= new Information({
        firstName:studata.firstName,
        lastName:studata.lastName,
        Mobile:studata.Mobile,
        email:studata.email
    })
// const result = await info.save()
    const result= await Information.insertMany([info])
    return res.send({message:result})   
}

const getData = async (req,res)=>{
     const info = req.query
    const result= await Information.find(info)
    return res.send({message:result})  
}
const deleteData = async (req,res)=>{
    const info = req.query;
    const result = await Information.deleteOne(info);
    return res.send ({message:result})
}

const updateData = async (req,res)=>{
    info = req.body
    filter = info.filter
    value = {$set:info.value}

    const result = await Information.updateOne(filter, value);
    return res.send ({message:result})
}

module.exports={insertData,getData,deleteData,updateData}