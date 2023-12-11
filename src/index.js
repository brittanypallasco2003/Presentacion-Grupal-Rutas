//Creación de un servidor Web en express

//importar la librería express con COMMON JS
const express=require('express')

//crear una instancia del web server express
const app=express()


//creación de rutas en express
//ruta inicial o ruta raíz
app.get('/',(req, res)=>{
    res.send(`
    <h1>Landing page - Grupo 1 😎</h1>
    <h2>Sobre nosotros</h2>
    <p>
        Somos un grupo apasionado de desarrolladores dedicados a convertir ideas en cautivadoras realidades digitales. 
        Con un profundo conocimiento de las últimas tecnologías y un compromiso inquebrantable con la excelencia, trabajamos
        juntos para construir sitios web que no solo cumplan, sino que superen las expectativas. Desde el diseño sofisticado
        hasta una funcionalidad impecable, cada línea de código que escribimos tiene como objetivo brindar una experiencia única a nuestros usuarios.     
    </p>
    <h2>Enlaces de la página 👩‍💻:</h2>
        <hr>
        <ul>
            <li>"/ ": Es la ruta raíz, de la página principal</li>
            <li>"/integrantes": Contiene los nombres de los integrantes del grupo 1. Ingrese la ruta mencionada o de <a href="https://taller09introexpress.onrender.com/integrantes">Click aquí 🖱️</a>para ver los integrantes</li>
            <li>"/catalogo/productos": Contiene un mini catálogo de electrodomésticos. Ingrese la ruta mencionada o de <a href="https://taller09introexpress.onrender.com/catalogo/productos">Click aquí 🖱️</a></li>
        </ul>
        <hr>
    `)
})

//ruta integrantes
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

//ruta
app.get('/catalogo/:productos',(req, res)=>{
    console.log(req.params)//obtener la variable catalogo
    res.send(`
    <h1>Catálogo de Productos</h1>
    <div class="card" style="width: 18rem;">
        <img src="https://cdn.pixabay.com/photo/2011/03/01/03/55/iron-5112_640.jpg" class="card-img-top" alt="plancha eléctrica" >
        <div class="card-body">
            <p class="card-text">$47.48 💵</p>
            <br>
            <p>Plancha eléctrica</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="https://cdn.pixabay.com/photo/2011/02/07/14/01/razor-4840_960_720.jpg" class="card-img-top" alt="máquina de afeitar" >
        <div class="card-body">
            <p class="card-text">$19.99 💵</p>
            <br>
            <p>Máquina de afeitar</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="https://cdn.pixabay.com/photo/2014/07/08/15/22/device-387636_1280.jpg" class="card-img-top" alt="licuadora">
        <div class="card-body">
            <p class="card-text">$22.99 💵</p>
            <br>
            <p>Licuadora</p>
        </div>
    </div>
    <div class="card" style="width: 18rem;">
        <img src="https://cdn.pixabay.com/photo/2014/03/06/11/30/washing-machine-280752_1280.jpg" class="card-img-top" alt="lavadora">
        <div class="card-body">
            <p class="card-text">$379.99 💵</p>
            <br>
            <p>Lavadora</p>
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

        body{
            background-image: radial-gradient(circle at 50% -20.71%, #ffdd9a 0, #fce199 6.25%, #f3e499 12.5%, #eae79b 18.75%, #e0e99e 25%, #d5eca2 31.25%, #cbeea7 37.5%, #c0f0ae 43.75%, #b5f2b5 50%, #aaf4bd 56.25%, #9ff5c6 62.5%, #94f6cf 68.75%, #8af7d8 75%, #80f7e2 81.25%, #77f7eb 87.5%, #70f7f5 93.75%, #6bf7fe 100%);
        }

        img{
            width: 100px;
            height:100px;
        }
        .card{
            margin: 0 auto;
            border: 1px dashed;
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

