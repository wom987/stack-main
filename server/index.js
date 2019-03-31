const express = require('express');
const morgan = require('morgan');
const app=express();
//Server Settings 
app.set('port',process.env.PORT|| 3000);
//Middelwares
//ver peticiones que se hacen al servidor
app.use(morgan('dev'));
//enteder archivos Json
app.use(express.json());
//Routes

//Starting the server
app.listen(app.get('port'),()=>
{
    console.log("Server on port 3000");
}
);
