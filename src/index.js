//Creación de un servidor Web en express

//importar la librería express con COMMON JS
const express=require('express')

//crear una instancia del web server express
const app=express()


//creación de rutas en express
//ruta inicial
app.get('/',(req, res)=>{
    res.send("Landing Page - Grupo 1")
})

app.get('/integrantes',(req, res)=>{
    res.send('Dashboard principal')
})

app.get('/productos',(req, res)=>{
    res.send('Catologo de productos')
})

//personalizar el mensaje para rutas no resgistras en el web server y mandar el código de respuesta 404
app.use((req,res)=>{
    res.status(400).send('Página NO encontrada - 404')
})

//indicarle al servidor el n de puerto en se que ejecutará las peticiones
app.listen(3000)
console.log('el servidor se está ejecutando en el puerto 3000')
