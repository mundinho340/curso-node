const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/aprendendo').then(()=> {
    console.log("Servidor conectado com a base de dados ...")
}).catch((e)=> {
    console.log('Servidor nao conectado por '+e)
})


