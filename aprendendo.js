const mongoose = require('mongoose')
const { NUMBER } = require('sequelize')

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/aprendendo').then(()=> {
    console.log("Servidor conectado com a base de dados ...")
}).catch((e)=> {
    console.log('Servidor nao conectado por '+e)
})

//Definindo o model
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
        type: Number,
         require: true
     },
     pais:{
        type: String,
        require: true
     }
})
//indicando a collection
mongoose.model('usuarios', usuarioSchema)

const novoUsuario = mongoose.model("usuarios")

    new novoUsuario({
        nome: 'krypthon',
        sobrenome: 'Ray',
        email: 'raimundo@gmail',
        idade: 19,
        pais: 'mozambique'
    }).save().then(()=> {
        console.log("dados inseridos com sucesso")
    }).catch((e)=> {
        console.log("houve um erro com "+e)
    })

