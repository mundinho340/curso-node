const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

//config
//template Engine
const exphbs  = require('express-handlebars');
var handle = exphbs.create({
    defaultLayout: 'main'
    });
    app.engine('handlebars', handle.engine);

    app.set('view engine', 'handlebars')
    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    //conexao com o banco de dados sql
    const sequelize = new Sequelize('teste', 'root','',{
        host: 'localhost',
        dialect:'mysql'
    })
    //Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
        })
    app.post('/add', function(req, res){
        res.send('titulo: '+req.body.titulo+' conteudo: '+req.body.conteudo )
    })
app.listen(8081, function(){
    console.log('Servidor Rodando na url https://localhost:8081')
})