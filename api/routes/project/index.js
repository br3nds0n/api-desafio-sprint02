//roteador agrupar as rotas e exportar

const roteador = require('express').Router()
const TabelaProject = require('../../../models/TabelaProject')
const NaoEncontrado = require('../../error/NaoEncontrado')
const Project = require('./Project')
const SerializadorProject = require('../../Serializador').SerializadorProject

roteador.get('/', async (req, res) => {
  const resultados = await TabelaProject.listar()
 
  res.status(200)
  const serializador = new SerializadorProject(res.getHeader('Content-Type'))
  
  res.send(serializador.serializar(resultados))
})

roteador.post('/', async (req, res, proximo) => {
  try {
    const dadosRecebidos = req.body
    const project = new Project(dadosRecebidos)
    await project.criar()

    res.status(201)
    const serializador = new SerializadorProject(res.getHeader('Content-Type'))
    res.send(serializador.serializar(project))
  } catch (erro) {
    proximo(erro)
  }
})

roteador.get('/:idProject', async (req, res, proximo) => {
  try {
    const id = req.params.idProject
    const project = new Project({ id: id })
    await project.carregar()
    res.status(200)

    const serializador = new SerializadorProject(res.getHeader('Content-Type'))
    res.send(serializador.serializar(project))
    
  } catch (erro) {
    proximo(erro)
  }
})

roteador.put('/:idProject', async (req, res, proximo) => {
  try {
    const id = req.params.idProject
    const dadosRecebidos = req.body
    const dados = Object.assign({}, dadosRecebidos, { id: id })
    const project = new Project(dados)

    res.status(204)
    await project.atualizar()
    res.end()
  } catch (erro) {
    proximo(erro)
  }
})

roteador.delete('/:idProject', async (req, res, proximo) => {
  try {
    const id = req.params.idProject
    const project = new Project({ id: id })
    await project.carregar()
    await project.remover()

    res.status(204)
    res.end()
  } catch (erro) {
    proximo(erro)
  }
})

const roteadorTask = require('./task')
roteador.use('/:idProject/task', roteadorTask)

module.exports = roteador
