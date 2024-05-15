const Estudiante = require('../Model/Estudiante_model');


exports.list = async (req, res, next) => {
    try {
        const estudiantes = await Estudiante.find({});
        res.json(estudiantes);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};


// Mostrar un estudiante específico por carnet
exports.show = async(req, res, next) =>{
    try{
        const estudiante = await Estudiante.findOne({carnet: req.params.carnet});
        if(!estudiante){
           return res.status(404).json({message: "Estudiante no encontrado"});
        }
        res.json(estudiante);
        next();

    }catch(error){
        console.log(error);
        return res.status(400).json({message: "Error"});
    }
}

// Agregar un nuevo estudiante
exports.add = async(req, res,next) =>{
    const estudiante = new Estudiante(req.body);

    try{
        await estudiante.save();
        res.json({message: "Se agregó un nuevo estudiante"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

// Actualizar un estudiante existente
exports.update = async (req, res, next) =>{
    try{
        const estudiante = await Estudiante.findOneAndUpdate(
            {carnet: req.params.carnet},req.body
        );
        res.json({message: "Estudiante actualizado"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

// Eliminar un estudiante existente
exports.delete = async (req, res, next) =>{
    try{
        const estudiante = await Estudiante.findOneAndDelete({carnet: req.params.carnet});
        res.json({message: "Estudiante eliminado exitosamente"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "error"});
        next();
    }

}






