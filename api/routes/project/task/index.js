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

module.exports = roteador