const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//config
//template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.stack('view engine', 'handlebars')
    //conexao com o banco de dados sql
    const sequelize = new Sequelize('teste', 'root','',{
        host: 'localhost',
        dialect:'mysql'
    })
    
app.listen(8081, function(){
    console.log('Servidor Rodando na url https://localhost:8081')
})