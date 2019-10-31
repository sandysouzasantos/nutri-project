const yargs = require('yargs');
const chalk = require('chalk');

require('./db/mongoose');

const clientes = require('./clientes');
const consultas = require('./consultas');

// Create addCliente command
yargs.command(
    'addCliente <nome> <endereco> <telefone> <email> <nascimento>', 'Cria um novo cliente',
    (yargs) => {
        yargs.positional('nome', {
            describe: 'Nome do cliente',
            type: 'string'
        }).positional('endereco', {
            describe: 'Endereço do cliente'
        }).positional('telefone', {
            describe: 'Telefone do cliente'
        }).positional('email', {
            describe: 'Email do cliente'
        }).positional('nascimento', {
            describe: 'Data de nascimento do cliente'
        })
    },
    function (argv) {
        clientes.addCliente(argv.nome, argv.endereco, argv.telefone, argv.email, argv.nascimento);
    }
)
    .help()
    .argv;


/*yargs.command({
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
        console.log('oi');
        // clientes.addCliente(argv.nome, argv.endereco, argv.telefone, argv.email, argv.nascimento);
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
        clientes.procurarCliente(argv.nome);
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
        consultas.addConsulta(argv.nome, argv.data, argv.horario, argv.peso, argv.gordura, argv.sensacao, argv.restricoes);
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
        consultas.procurarConsultas(argv.nome);
    }
});*/

//Create grupo de alimentos