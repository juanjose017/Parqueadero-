const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
    tipo: { type: String, required: true, enum: ['carro', 'moto'] },
    placa: { type: String, required: true, unique: true },
    tiempoIngreso: { type: Date, default: Date.now },
});

const Registro = mongoose.model('Registro', registroSchema);
module.exports = Registro;
