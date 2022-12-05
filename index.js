const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//config
//template Engine
const exphbs  = require('express-handlebars');
var handle = exphbs.create({
    defaultLayout: 'main'
    });
    app.engine('handlebars', handle.engine);

    app.set('view engine', 'handlebars')

    //conexao com o banco de dados sql
    const sequelize = new Sequelize('teste', 'root','',{
        host: 'localhost',
        dialect:'mysql'
    })
    //Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
        })
app.listen(8081, function(){
    console.log('Servidor Rodando na url https://localhost:8081')
})