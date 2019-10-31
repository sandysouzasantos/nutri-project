const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true,
    },
    data: {
        type: Date,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    percentualGordura: {
        type: Number,
        required: true
    },
    sensacaoFisica: {
        type: String,
        minlength: 3,
        maxlength: 50,
    },
    restricoes: {
        type: String,
        minlength: 3,
        maxlength: 50,
    },
});

module.exports.Consulta = mongoose.model('Consulta', consultaSchema);
