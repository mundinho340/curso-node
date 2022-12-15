const mongoose =require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/bancoTeste").then(()=>{

 console.log("Banco conectado com sucesso!!!")



}).catch((err)=>{

console.log("Houve um erro ao se conectar ao banco:" +err)



})