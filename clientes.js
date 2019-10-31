const chalk = require('chalk');
const yargsInteractive = require('yargs-interactive');

const {Cliente} = require('./models/cliente.model');

const clienteInfo = {
    interactive: {default: true},
    nome: {
        type: 'input',
        describe: 'Nome do Cliente: '
    },
    endereco: {
        type: 'input',
        describe: 'Endereço do cliente: '
    },
    telefone: {
        type: 'input',
        describe: 'Telefone do Cliente: '
    },
    email: {
        type: 'input',
        describe: 'Email do Cliente: '
    },
    nascimento: {
        type: 'input',
        describe: 'Data de nascimento do Cliente: '
    },
};

const procurarCliente = (nome) => {
    Cliente
        .findOne({nome: nome})
        .then(
            (cliente) => {
                if (cliente) {
                    console.log(cliente);
                } else {
                    console.log(chalk.red.inverse('Cliente não encontrado'));
                }
            },
            (err) => {
                console.log(err);
            }
        );
};

const addCliente = () => {
    yargsInteractive()
        .usage("$0 <command> [args]")
        .interactive(clienteInfo)
        .then(result => {
            Cliente
                .findOne({nome: result.nome})
                .then(
                    (cliente) => {
                        if (!cliente) {
                            const novoCliente = new Cliente({
                                nome: result.nome,
                                endereco: result.endereco,
                                telefone: result.telefone,
                                email: result.email,
                                nascimento: result.nascimento
                            });
                            novoCliente.save();
                            console.log(chalk.green.inverse('Novo cliente cadastrado'));
                            return console.log(novoCliente);
                        } else {
                            return console.log(chalk.red.inverse('Este cliente já está cadastrado.'));
                        }
                    },
                    (err) => {
                        console.log(err);
                    }
                );
        });
};

module.exports = {
    addCliente: addCliente,
    procurarCliente: procurarCliente
};
