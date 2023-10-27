const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/mainRoutes');

const app = express();

app.use(morgan("dev")) // dev significa que va a estar escuchando cuando este deployado

//Middleware que vamos a tener como ejemplo para comenzar a realizar validaciones 
app.use((req, res, netx)=>{
    console.log("Hola soy el middleware");
    netx()
});

// traigo las rutas que voy a utilizar de MAINROUTER
app.use(mainRouter)

module.exports = app;