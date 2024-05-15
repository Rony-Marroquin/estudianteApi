const express = require('express');
const router = express.Router();
const EstudianteController = require('../Controllers/Estudiante_controller');






// Listar todos los estudiantes
router.get('/api/list', EstudianteController.list);

// Mostrar un estudiante específico por carnet
router.get('/api/list/:carnet', EstudianteController.show);

// Agregar un nuevo estudiante
router.post('/api/add', EstudianteController.add);

// Actualizar un estudiante existente
router.put('/api/update/:carnet', EstudianteController.update);

// Eliminar un estudiante existente
router.delete('/api/delete/:carnet', EstudianteController.delete);

module.exports = router;
