const chalk = require('chalk');
const yargsInteractive = require('yargs-interactive');

const Cliente = require('./models/cliente.model');

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

const addCliente = () => {
    yargsInteractive()
        .usage("$0 <command> [args]")
        .interactive(clienteInfo)
        .then(result => {
            console.log(result);
        });
};
/*const addCliente = (nome, endereco, telefone, email, nascimento) => {
    console.log(nome, endereco, telefone, email, nascimento);
    const cliente = Cliente.findOne({nome});

    if(!cliente){
        const novoCliente = new Cliente({nome, endereco, telefone, email, nascimento});
        novoCliente.save();
        return console.log(novoCliente);
    } else {
        return console.log(chalk.red.inverse('Já existe um cliente com este nome.'));
    }
};*/

const procurarCliente = async (nome) => {
    const cliente = await Cliente.findOne({nome});

    if (cliente) {
        console.log(cliente);
    } else {
        console.log(chalk.red.inverse('Não existe nenhum cliente com o nome pesquisado'));
    }
};

module.exports = {
    addCliente: addCliente,
    procurarCliente: procurarCliente
};
