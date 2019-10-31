const clientes = require('./clientes');
const consultas = require('./consultas');
require('./db/mongoose');

const command = process.argv[2];

if (command === 'addCliente') {
    clientes.addCliente();
} else if (command === 'addConsulta') {
    consultas.addConsulta();
} else if (command === 'cliente') {
    clientes.procurarCliente(process.argv[3]);
} else if (command === 'consulta') {
    consultas.procurarConsultas(process.argv[3]);
}
