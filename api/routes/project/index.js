//roteador agrupar as rotas e exportar

const roteador = require('express').Router()
const TabelaProject = require('../../../models/TabelaProject')
const Project = require('./Project')

roteador.get('/', async (req, res) => {
  const resultados = await TabelaProject.listar()

  res.send(JSON.stringify(resultados))
})

roteador.post('/', async (req, res) => {
  const dadosRecebidos = req.body
  const project = new Project(dadosRecebidos)

  await project.criar()
  res.send(JSON.stringify(project))
})

roteador.get('/:idProject', async (req, res) => {
  try {
      const id = req.params.idProject
      const project = new Project({ id: id })
      await project.carregar()
      res.send(
          JSON.stringify(project)
      )
  } catch (erro) {
    res.send(
      JSON.stringify({
        mensagem: erro.message
      })
    )
  }
})

roteador.put('/:idProject', async (req, res) => {
  try {
    const id = req.params.idProject
    const dadosRecebidos = req.body
    const dados = Object.assign({}, dadosRecebidos, {id: id})
    const project = new Project(dados)
    await project.atualizar()
    res.end()
  }catch (erro) {
    res.send(
      JSON.stringify({
        mensagem: erro.message
      })
    )
  }
})

module.exports = roteador
