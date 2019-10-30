const chalk = require('chalk');

const Clientes = require('./models/cliente.model');

const addCliente = async (nome, endereco, telefone, email, nascimento) => {
    const cliente = await Clientes.find({nome});

    if(!cliente){
        const novoCliente = new Clientes(nome, endereco, telefone, email, nascimento);
        await novoCliente.save();
        console.log(novoCliente);
    } else {
        console.log(chalk.red.inverse('Já existe um cliente com este nome.'));
    }
};

const procurarCliente = async (nome) => {
    const cliente = await Clientes.find({nome});

    if(cliente){
        console.log(cliente);
    } else {
        console.log(chalk.red.inverse('Não existe nenhum cliente com o nome pesquisado'));
    }
};

module.exports = {
    addCliente,
    procurarCliente
};
