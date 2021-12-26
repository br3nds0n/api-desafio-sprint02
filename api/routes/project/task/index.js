const roteador = require('express').Router({ mergeParams: true })
const Tabela = require('../../../../models/TabelaTask')

roteador.get('/', async (req, res) => {
  const tasks = await Tabela.listar(req.params.idProject)
  res.send(
    JSON.stringify(tasks)
  )
})

module.exports = roteador