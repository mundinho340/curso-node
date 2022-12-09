const express = require('express')
const app =express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const ehbs = handlebars.create({
    defaultLayout:'handlebars'
})

app.engine('handlesbar', handlebars.engine)
app.set('view egine', handlebars)
const sequelize = new Sequelize('teste', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})
app.get('/cad', function(req, res){
    res.render("formulario")
})
app.post('/', function(req, res){
    res.send("titulo: "+req.body.titulo)

})

app.listen(8080, function(){
    console.log('Esta rodando na porta 8080 ->>>>>>>>>>>>>')
})