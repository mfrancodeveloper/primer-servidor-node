const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hola Mundo que tal!!')
})


const PORT = process.env.PORT || 3000

console.log({PORT})

app.listen(PORT, function(){
    console.log("Servidor escuchando en el puerto", PORT)
})