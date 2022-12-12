const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost/aprendendo").then(()=> {
    console.log("MongoDB conectado ...").cacth((e)=>{
        console.log("Houve um erro ao se connectar ao Mongo "+e)
    })
})