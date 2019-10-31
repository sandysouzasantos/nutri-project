const chalk = require('chalk');

const {Consulta} = require('./models/consulta.model');
const {Cliente} = require('./models/cliente.model');

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
    percentualGordura: {
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
            Cliente
                .findOne({nome: result.nome})
                .then(
                    (cliente) => {
                        if(!cliente) {
                            return console.log(chalk.red.inverse('Cliente não encontrado.'));
                        }

                        const consulta = new Consulta({
                            cliente: cliente._id,
                            data: result.data,
                            horario: result.horario,
                            peso: result.peso,
                            percentualGordura: result.percentualGordura,
                            sensacaoFisica: result.sensacao,
                            restricoes: result.restricoes
                        });
                        consulta.save();
                        return console.log(consulta);
                    },
                    (err) => {
                        return console.log(err);
                    }
                );
        });
};

const procurarConsultas = (nome) => {
    Cliente
        .findOne({nome: nome})
        .then(
            (cliente) => {
                if (!cliente) {
                    return console.log(chalk.red.inverse('Cliente não encontrado.'));
                }

                Consulta
                    .find({cliente: cliente._id})
                    .then(
                        (consultas) => {
                            if(consultas.length > 0){
                                return console.log(consultas);
                            } else {
                                return console.log(chalk.red.inverse('Ainda não há consultas para esse cliente'));
                            }
                        }
                    );
            },
            (err) => {
                return console.log(err);
            }
        );
};

module.exports = {
    addConsulta,
    procurarConsultas
};
