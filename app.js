const clientes = require('./clientes');
const consultas = require('./consultas');

const command = process.argv[2];

if (command === 'addCliente') {
    console.log('addCliente');
    clientes.addCliente();
} else if (command === 'addConsulta') {
    console.log('addCliente');
    consultas.addConsulta();
}
