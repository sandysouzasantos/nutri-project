const yargs = require('yargs');

const cliente = require('./clientes');

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
            describe: 'Telefone do Cliente',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email do Cliente',
            demandOption: true,
            type: 'string'
        },
        nascimento: {
            describe: 'Data de nascimento do Cliente',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        cliente.addCliente(argv.nome, argv.endereco, argv.telefone, argv.email, argv.nascimento);
    }
});

//Create cliente command para buscar clientes
yargs.command({
    command: 'cliente',
    describe: 'Busca o cliente pelo nome',
    builder: {
        nome: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        cliente.procurarCliente(argv.nome);
    }
});

//Create addConsulta command
yargs.command({
    command: 'addConsulta',
    describe: 'Adiciona o registro de uma nova consulta',
    builder: {
        nome: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
        data: {
            describe: 'Data da consulta',
            demandOption: true,
            type: 'string'
        },
        horario: {
            describe: 'Horário da consulta',
            demandOption: true,
            type: 'string'
        },
        peso: {
            describe: 'Peso do Cliente',
            demandOption: true,
            type: 'string'
        },
        gordura: {
            describe: 'Percentual de gordura do Cliente',
            demandOption: true,
            type: 'string'
        },
        sensacao: {
            describe: 'Sensação física do Cliente',
            demandOption: true,
            type: 'string'
        },
        restricoes: {
            describe: 'Restrições',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {

    }
});

// Create consulta command para buscar consultas
yargs.command({
    command: 'consulta',
    describe: 'Busca as consultas referentes a um cliente',
    builder: {
        nome: {
            describe: 'Nome do Cliente',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {

    }
});

//Create grupo de alimentos