const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const Post = require("./modules/Post")

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

    app.get('/', function(req, res){
        res.render("home")
    })

    app.get('/cad', function(req, res){
        res.render('formulario')
        })
    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(e){
            res.send('Houve um erro '+e)
        })
    })
app.listen(8081, function(){
    console.log('Servidor Rodando na url https://localhost:8081')
})

//krypthon rei da programacao