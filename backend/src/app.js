const express = require('express');
const routes = require('../utils/routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)
app.use(errors());

module.exports = app;

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * GET: Buscar uma informação no Back End
  * POST: Criar uma informação no Back End
  * PUT: Alterar uma informção
  * DELETE: Deletar uma informação
  */

  /**
   * Tipos de Parametros
   * 
   * Query Params : Parâmetros nomeados enviados na rota após '?' (Filtros e Páginação)
   * Route Params : Parâmetros utilizados para identificar recursos.
   * Request Body : 
   */