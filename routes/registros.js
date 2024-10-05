const express = require('express');
const Registro = require('../models/Registro');

const router = express.Router();

// Crear un nuevo registro
router.post('/', async (req, res) => {
    const { tipo, placa } = req.body;
    const nuevoRegistro = new Registro({ tipo, placa });
    try {
        const savedRegistro = await nuevoRegistro.save();
        res.status(201).json(savedRegistro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener todos los registros
router.get('/', async (req, res) => {
    try {
        const registros = await Registro.find();
        res.status(200).json(registros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un registro
router.put('/:id', async (req, res) => {
    try {
        const registroActualizado = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!registroActualizado) return res.status(404).send('Registro no encontrado');
        res.json(registroActualizado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Eliminar un registro
router.delete('/:id', async (req, res) => {
    try {
        const registroEliminado = await Registro.findByIdAndDelete(req.params.id);
        if (!registroEliminado) return res.status(404).send('Registro no encontrado');
        res.json({ message: 'Registro eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
