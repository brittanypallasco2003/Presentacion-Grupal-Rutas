//Creación de un servidor Web en express

//importar la librería express con COMMON JS
const express=require('express')

//crear una instancia del web server express
const app=express()

//indicarle al servidor el n de puerto que ejecutará las peticiones
app.listen(3000)
console.log('el servidor se está ejecutando en el puerto 3000')
