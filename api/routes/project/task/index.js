const roteador = require('express').Router({ mergeParams: true })
const Tabela = require('../../../../models/TabelaTask')
const Task = require('./Task')

roteador.get('/', async (req, res) => {
  const tasks = await Tabela.listar(req.project.id)
  res.send(
    JSON.stringify(tasks)
  )
})

roteador.post('/', async (req, res, proximo)=> {
    try {
      const idProject = req.project.id
      const corpo = req.body
      const dados = Object.assign({}, corpo, { projectId: idProject})
      const task = new Task(dados)
      await task.criar()
      res.status(201)
    
      res.send(task)
    } catch (erro) {
      proximo(erro)
    }
})

roteador.delete('/:id', async (req, res) => {
  const dados = {
    id: req.params.id,
    projectId: req.project.id
  }

  const task = new Task(dados)
  await task.apagar()
  res.status(204)
  res.end()
})

roteador.get('/:id', async (req, res, proximo) => {
  try{
    const dados = {
      id: req.params.id,
      projectId: req.project.id
    }
    const task = new Task(dados)
    await task.carregar()
    res.send(
      JSON.stringify(task)
    )
}catch (erro) {
  proximo(erro)
}
})

roteador.put('/:id', async (req, res, proximo) => {
  try{
    const dados = Object.assign(
      {},
      req.body,
      {
        id: req.params.id,
        projectId: req.project.id
      }
    )
    const task = new Task(dados)
    await task.atualizar()
    res.status(204)
    res.end()
  }catch (erro){
    proximo(erro)
  }

})

roteador.post('/:id/diminuir-relevancia', async (req, res, proximo) => {
  try {
    const task = new Task({
      id: req.params.id,
      projectId: req.project.id
    })
  
    await task.carregar()
    task.taskRelevance = task.taskRelevance - req.body.taskRelevance
    await task.diminuirTarefas()

    res.status(204)
    res.end()
  }catch (erro){
    proximo(erro)
  }
})

roteador.post('/:id/aumentar-relevancia', async (req, res, proximo) => {
  try {
    const task = new Task({
      id: req.params.id,
      projectId: req.project.id
    })
  
    await task.carregar()
    task.taskRelevance = task.taskRelevance + req.body.taskRelevance
    await task.aumentarRelevancia()

    res.status(204)
    res.end()
  }catch (erro){
    proximo(erro)
  }
})

module.exports = roteador