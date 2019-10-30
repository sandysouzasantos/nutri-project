const yargs = require('yargs');

// Create addCliente command
yargs.command({
    command: 'addCliente',
    describe: 'Adiciona um novo cliente',
    builder: {
        nome: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
        endereco: {
            describe: 'Endereço do cliente',
            demandOption: true,
            type: 'string'
        },
        telefone: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
        nascimento: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {

    }
});

//Create addConsulta command
yargs.command({
    command: 'addConsulta',
    describe: 'Adiciona o registro de uma nova consulta',
    builder: {
        cliente: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
        data: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
        horario: {
            describe: 'Endereço do cliente',
            demandOption: true,
            type: 'string'
        },
        peso: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
        percentualGordura: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
        sensacao: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
        restricoes: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {

    }
});

//Create cliente command para buscar clientes
// Create consulta command para buscar consultas
//Create grupo de alimentos