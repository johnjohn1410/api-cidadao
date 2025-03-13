import express from 'express';
import CidadaoController from '../controllers/cidadaoController.js';
const routes = express.Router();
routes.get('/cidadaos', CidadaoController.listarCidadaos);
routes.get('/cidadaos/:cpf', CidadaoController.listarCidadaoPorCpf);
routes.post('/cidadaos', CidadaoController.cadastrarCidadao);
routes.put('/cidadaos/:cpf', CidadaoController.atualizarCidadao);
routes.delete('/cidadaos/:cpf', CidadaoController.excluirCidadão);
export default routes;
