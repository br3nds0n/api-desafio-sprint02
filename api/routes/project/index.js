//roteador agrupar as rotas e exportar

const roteador = require('express').Router()
const TabelaProject = require('./TabelaProject')

roteador.use('/', async (req, res) => {
  const resultados = await TabelaProject.listar()

  res.send(
    JSON.stringify(resultados)
  )
})

module.exports = roteador