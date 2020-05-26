const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

const connection = require('./database/connection');

//=-=-=-=-=-=-=-=-=-=-=-=-=- USUARIO =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=

routes.post('/usuario/', async (request, response) => {
    const { nome, email, telefone} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('usuario').insert(
        {
            id,
            nome,
            email,
            telefone
        }
    )
    return response.json({id});
});

routes.get('/usuario/', async (request, response) => {
    const usuarios = await connection('usuario').select('*');
    console.log(usuarios.length);
    return response.json(usuarios);
});

routes.delete('/usuario/', async (request, response) => {
    const {id} = request.param;

    await connection('usuario').where('id', id).delete();

    return response.status(204).send();
});

//=-=-=-=-=-=-=-=-=-=-=-=-=- CLIENTE =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=

routes.post('/cliente/', async (request, response) => {
    const { nome, email, telefone} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('cliente').insert(
        {
            id,
            nome,
            email,
            telefone
        }
    )
    return response.json({id});
});

routes.get('/cliente/', async (request, response) => {
    const clientes = await connection('cliente').select('*');
    console.log(clientes.length);
    return response.json(clientes);
});

routes.delete('/cliente/', async (request, response) => {
    const {id} = request.param;

    await connection('cliente').where('id', id).delete();

    return response.status(204).send();
});

//=-=-=-=-=-=-=-=-=-=-=-=-=- PRODUTO =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=

routes.post('/produto/', async (request, response) => {
    const { nome, descricao} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('produto').insert(
        {
            id,
            nome,
            descricao
        }
    )
    return response.json({id});
});

routes.get('/produto/', async (request, response) => {
    const produtos = await connection('produto').select('*');
    console.log(produtos.length);
    return response.json(produtos);
});

routes.delete('/produto/', async (request, response) => {
    const {id} = request.param;

    await connection('produto').where('id', id).delete();

    return response.status(204).send();
});

//=-=-=-=-=-=-=-=-=-=-=-=-=- FORNECEDOR =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=

routes.post('/fornecedor/', async (request, response) => {
    const { nome, email, telefone} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('fornecedor').insert(
        {
            id,
            nome,
            email,
            telefone
        }
    )
    return response.json({id});
});

routes.get('/fornecedor/', async (request, response) => {
    const fornecedors = await connection('fornecedor').select('*');
    console.log(fornecedors.length);
    return response.json(fornecedors);
});

routes.delete('/fornecedor/', async (request, response) => {
    const {id} = request.param;

    await connection('fornecedor').where('id', id).delete();

    return response.status(204).send();
});
module.exports = routes;