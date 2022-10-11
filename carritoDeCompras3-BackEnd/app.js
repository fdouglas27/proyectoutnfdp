//express es una libreria que se instala por consola "ctrl+ñ" antes tenemos que tener instalado el Node.JS
//el comando para instalar en Node.Js es npm por ejemplo "npm i express" nos instala la libreria
//en package.json nos muestra todas las librerias que vas instalando, por ejemplo instalamos "Express" "nodemon"

//No es conveniente que los archivos se hagan muy extensos, por esto vamos a crear la carpeta routes y dividir todos 
//los datos ubicados aqui dentro en distintos archivos que vamos a ir llamando
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//BB.DD
//aca creamos el archivo ".env" y tambien ".gitignore", en el gitignore declaro el .env para que no se vea
//y dentro del .env declaro la variable DB_URL, todo esto es para esconder las conexiones del los usuarios
mongoose.connect(process.env.DB_URL);
// Creo una variable "db" para que los errorres de conexion me los pase por consola
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Conectado a la BB.DD'));

//Import Routes

const itemsRoutes = require('./routes/items');
const imgRoutes = require('./routes/img');
const paymentsIntentRoutes = require('./routes/paymentsIntent') 

//Mock (esto lo voy a usar en items.js dado que hay que achicar el tamaño del app.js)
// const itemsMock = require('./mock/items.json');

//esta es la conexion a la base de datos, usuario y contraseña
//mongodb+srv://<username>:<password>@cluster0.53rxotd.mongodb.net/?retryWrites=true&w=majority
//user: fdouglas27 pass: Ja9SMNH9dw2XOBs1


//MiddleWare (aqui voy a realizar todos los llamados a las distintas funcionalidades)
//cors es otra dependencia que instale por consola, sirve en apariencia para dar permisos de acceso
app.use(cors());
app.use(express.json());
//este itemRoutes lo voy a llamar arriba y es para conectar con el items.js
app.use('/items', itemsRoutes);
app.use('/img', imgRoutes);
// app.use('/create-payment-intent', paymentsIntentRoutes);
app.use('/create', paymentsIntentRoutes);

//Rutas
//aca levantamos los datos "/" es el directorio raiz, "req" es de request y "res" respond
app.get('/', (req, res) => {
    res.send('Home!');
})
//ahora con esto tenemos que modificar el archivo package.json en scrips y utilizar el complemento que intalamos "nodemon"

//Images (esto me lo llevo al archivo img.js para seguir achicando el app.js)
// app.get('/img/:imgName', (req, res) => {
//     //este itemMock lo genero un poco mas arriba es solo para mostrar articulos ficticios seguramente despues se va
//     const image = req.params.imgName;
//     //${__dirname} es para pararme en el directorio que me encuentro
// res.sendFile(`${__dirname}/img/${image}`)
// });
//":imgName" es para capturar el nombre de la imagen en la carpeta

//Items (todo esto me lo llevo a items.js para descargar de info el archivo app.js)
// app.get('/items', (req, res) => {
//     //este itemMock lo genero un poco mas arriba es solo para mostrar articulos ficticios seguramente despues se va
//     res.send(itemsMock);
// })
//Entonces si en el navegador pongo "localhost:3000/items" me aparece la leyenda "ITEMS" que puse en la respuesta


//inicializar
app.listen(3000);


/////////////////////////////////////////////////////////////////////
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

// // BB.DD
// // mongoose.connect(process.env.DB_URL, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });
// // const db = mongoose.connection;
// // db.on('error', (error) => console.error(error));
// // db.once('open', () => console.log('Conectado a BB.DD'));

// //BB.DD
// //aca creamos el archivo ".env" y tambien ".gitignore", en el gitignore declaro el .env para que no se vea
// //y dentro del .env declaro la variable DB_URL, todo esto es para esconder las conexiones del los usuarios
// mongoose.connect(process.env.DB_URL);
// // Creo una variable "db" para que los errorres de conexion me los pase por consola
// const db = mongoose.connection;
// db.on('error', error => console.error(error));
// db.once('open', () => console.log('Conectado a la BB.DD'));

// // Import Routes
// const itemsRoutes = require('./routes/items');
// const imgRoutes = require('./routes/img');
// const paymentsIntentRoutes = require('./routes/paymentsIntent');
// const ordersRoutes = require('./routes/orders');

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// app.use('/items', itemsRoutes);
// app.use('/img', imgRoutes);
// app.use('/create-payment-intent', paymentsIntentRoutes);
// // app.use('/order', ordersRoutes);

// // Rutas
// app.get('/', (req, res) => {
//   res.send('HOME!');
// });

// // Start
// app.listen(3000);
