const express = require('express');
const mongoose = require('mongoose');

const morgan = require('morgan');
const cors = require('cors');

const app =express();



//inicializar el puerto
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('server listening on port!',port)
})


//rutas
app.get('/',(req, res)=>{
    res.send('Bienvenido al server!')
})

//conexio con mongodb

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://ronymarroquin4991:DwfUVPsnq9L4KdKB@cluster0.h4iqkbw.mongodb.net/').then(db => console.log('conexion exitosa mongoDB Atlas'))
.catch(error=>console.log('error:',error))


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


app.use(require('./Routes/Estudiante_routes'))