const roteador = require('express').Router({ mergeParams: true })
const Tabela = require('../../../../models/TabelaTask')
const Task = require('./Task')

roteador.get('/', async (req, res) => {
  const tasks = await Tabela.listar(req.params.idProject)
  res.send(
    JSON.stringify(tasks)
  )
})

roteador.post('/', async (req, res)=> {
  const idProject = req.params.idProject
  const corpo = req.body
  const dados = Object.assign({}, corpo, { projectId: idProject})
  const task = new Task(dados)
  await task.criar()
  res.status(201)

  res.send(task)
})

roteador.delete('/:id', async (req, res) => {
  const dados = {
    id: req.params.id,
    projectId: req.params.idProject
  }

  const task = new Task(dados)
  await task.apagar()
  res.status(204)
  res.end()
})

module.exports = roteador