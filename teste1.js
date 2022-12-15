const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/turmas').then(()=> {
    console.log("servidor conectado pressistencia")
}).catch((e)=>{
    console.log("Servidor nao conectado porque houve um erro "+e)
})