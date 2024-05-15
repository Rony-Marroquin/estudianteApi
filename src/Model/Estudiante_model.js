const mongoose = require('mongoose');


const Schema =mongoose.Schema;

const  estudianteSchema = new Schema(
    {
        carnet:{
            type: String,
            trim: true,
        },
        nombre:{
            type: String,
            trim: true,
        },
         apellido:{
            type: String,
            trim: true,
        },
        grado:{
            type: String,
            trim: true,
        },
        seccion:{
            type: String,
            trim: true,
        
        },
        

    }
)


module.exports= mongoose.model('estudiante',estudianteSchema)