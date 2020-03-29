const express = require('express');

const app = express();
app.use(express.json())

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

app.get('/', (request, response) => {
    return request.send('Hello World');
});

app.post('/users', (request, response) => {
    const params = request.body

    console.log(params);
    return response.json({event:'Semana Oministack 11.0', student: 'Mel'})
});

app.listen(3333); 