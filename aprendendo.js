const mongoose = require('mongoose')
const { NUMBER } = require('sequelize')

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/aprendendo').then(()=> {
    console.log("Servidor conectado com a base de dados ...")
}).catch((e)=> {
    console.log('Servidor nao conectado por '+e)
})

const usuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    }
    ,
    sobrenome:{
        type: String,
        require: true  
    },
    email:{
        type: String,
        require: true
    },
     idade:{
        type: NUMBER,
         require: true
     },
     pais:{
        type: String,
        require: true
     }
})

