//roteador agrupar as rotas e exportar

const roteador = require('express').Router()

roteador.use('/', (req, res) => {
  res.send('OK')
})

module.exports = roteador