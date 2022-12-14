const mongoose = require("mongoose")
//const mongoose = require('mongoose');

const database ='mongodb://localhost:27017/ussd';

mongoose.set("strictQuery",true)
mongoose.connect(database).then(()=>{
    console.log('connectado ao mongodb')

}).catch((e)=> {
    console.log('Nao foi possivel se conectar houve um erro de '+e)
})



