const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    evento: "Semana Omnistack",
    participante: "Fernando Lima"
  })
})

app.post('/users', (request, response) => {
  return response.json({
    retorno: "Evento criado com sucesso"
  })
})

app.listen(3333);

