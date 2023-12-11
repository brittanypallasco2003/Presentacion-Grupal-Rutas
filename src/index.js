//Creación de un servidor Web en express

//importar la librería express con COMMON JS
const express=require('express')

//crear una instancia del web server express
const app=express()


//creación de rutas en express
//ruta inicial
app.get('/',(req, res)=>{
    res.send("Landing Page - Grupo #1")
})

app.get('/integrantes',(req, res)=>{
    res.json([
        {
            "número":"1",
            "nombre":"Eduardo",
            "apellido":"Almachi"
        },
        {
            "número":"2",
            "nombre":"Bryan",
            "apellido":"Delgado"
        },
        {
            "número":"3",
            "nombre":"Brittany",
            "apellido":"Espinel"
        },
        {
            "número":"4",
            "nombre":"Mateo",
            "apellido":"Miño"
        },
        {
            "número":"5",
            "nombre":"Melany",
            "apellido":"Sangucho"
        },
        {
            "número":"6",
            "nombre":"David",
            "apellido":"Vallejo"
        },
        {
            "número":"7",
            "nombre":"Erick",
            "apellido":"Villaroel"
        },
        {
            "número":"8",
            "nombre":"Danny",
            "apellido":"Yanacallo"
        }
    ])
})

//Manejo de request para express
app.use(express.json())//para que las peticiones sean en formato JSON

app.get('/catalogo/:productos',(req, res)=>{
    console.log(req.params)//obtener la variable catalogo
    res.send(`
    <h1>Cátalogo de Productos</h1>
    <div class="card" style="width: 18rem;">
        <img src="https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg" class="card-img-top" alt="plancha eléctrica" >
        <div class="card-body">
            <p class="card-text">$47.48</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="https://cdn.pixabay.com/photo/2011/02/07/14/01/razor-4840_960_720.jpg" class="card-img-top" alt="máquina de afeitar" >
        <div class="card-body">
            <p class="card-text">$19.99</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="https://cdn.pixabay.com/photo/2014/07/08/15/22/device-387636_1280.jpg" class="card-img-top" alt="licuadora">
        <div class="card-body">
            <p class="card-text">$22.99</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="https://cdn.pixabay.com/photo/2014/03/06/11/30/washing-machine-280752_1280.jpg" class="card-img-top" alt="lavadora">
        <div class="card-body">
            <p class="card-text">$379.99</p>
        </div>
    </div>

    <style>
        *{
            margin: 0;
            padding: 5px;
        }
        h1{
            text-align:center;
        }

        img{
            width: 100px;
            height:100px;
        }
        .card{
            margin: 0 auto;
            border: 1px dotted;
        }
    </style>

    `)
})

//personalizar el mensaje para rutas no resgistras en el web server y mandar el código de respuesta 404
app.use((req,res)=>{
    res.status(400).send('Página NO encontrada - 404')
})

//indicarle al servidor el n de puerto en se que ejecutará las peticiones
app.listen(3000)
console.log('el servidor se está ejecutando en el puerto 3000')

