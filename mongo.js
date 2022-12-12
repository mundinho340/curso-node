const mongoose = require("mongoose")


mongoose.connect('mongodb://localhost/learnmongodb', {useNewUrlParser: true})



const dab = mongoose.connection



dab.on('error', console.error.bind(console, 'Erro de conecção: '))



dab.once('open',() => {

    console.log('Conectado com sucesso!')
})

