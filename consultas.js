const chalk = require('chalk');

const Consulta = require('./models/consulta.model');
const Cliente = require('./models/cliente.model');

const yargsInteractive = require('yargs-interactive');


const consultaInfo = {
    interactive: {default: true},
    nome: {
        type: 'input',
        describe: 'Nome do Cliente: ',
    },
    data: {
        type: 'input',
        describe: 'Data da consulta: '
    },
    horario: {
        type: 'input',
        describe: 'Horário da consulta: '
    },
    peso: {
        type: 'input',
        describe: 'Peso do Cliente: '
    },
    gordura: {
        type: 'input',
        describe: 'Percentual de gordura do Cliente: '
    },
    sensacao: {
        type: 'input',
        describe: 'Sensação física do Cliente: '
    },
    restricoes: {
        type: 'input',
        describe: 'Restrições: '
    },
};


const addConsulta = () => {
    yargsInteractive()
        .usage("$0 <command> [args]")
        .interactive(consultaInfo)
        .then(result => {
            console.log(result);
        });
};

/*const addConsulta = async (nome, data, horario, peso, gordura, sensacaoFisica, restricoes) => {
    const cliente = await Cliente.find({nome});

    if(!cliente) {
        return console.log(chalk.red.inverse('Cliente não encontrado.'));
    }

    const consulta = new Consulta({cliente: cliente._id, data, horario, peso, gordura, sensacaoFisica, restricoes});
    await consulta.save();
    console.log(consulta);
};*/

const procurarConsultas = async (nome) => {
    const cliente = await Cliente.find({nome});

    if (!cliente) {
        return console.log(chalk.red.inverse('Cliente não encontrado.'));
    }

    const consultas = await Consulta.findMany({cliente: nome});

    console.log(consultas);
};

module.exports = {
    addConsulta,
    procurarConsultas
};
