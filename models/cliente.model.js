const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    endereco: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    telefone: {
        type: String,
        required: true,
        maxlength: 11,
    },
    nascimento: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
});

clienteSchema.virtual('consulta', {
    ref: 'Consulta',
    localField: '_id',
    foreignField: 'cliente',
});

module.exports.Cliente = mongoose.model('Cliente', clienteSchema);
