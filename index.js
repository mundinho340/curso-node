const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

//config
//template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.stack('view engine', 'handlebars')