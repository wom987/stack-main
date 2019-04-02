const express = require('express');
const morgan = require('morgan');
const cors =require('cors');
const app=express();

const {mongoose}= require("./database");
//Server Settings 
app.set('port',process.env.PORT|| 3000);
//Middelwares
//ver peticiones que se hacen al servidor
app.use(morgan('dev'));
//enteder archivos Json
app.use(express.json());
//cors
app.use(cors({
    origin:'http://localhost:4200'
}));
//Routes
//requerir el archivo de las rutas de la aplicacion 
app.use('/api/employees',require('./routes/employee.routes'));

//Starting the server
app.listen(app.get('port'),()=>
{
    console.log("Server on port 3000");
}
);
