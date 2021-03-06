const Modelo = require("./ModeloTabelaProject")
const NaoEncontrado = require('../api/error/NaoEncontrado')
const Task = require("./ModeloTask")

module.exports = {
  listar() {

    return Modelo.findAll()
  },
  inserir(project) {
    return Modelo.create(project)
  },
  async pegarPorId (id) {
    const encontrado = await Modelo.findOne({
      where: {
        id: id
      },
      include: Task
    })
  

    if (!encontrado) {
      throw new NaoEncontrado()
    }
   
    console.log(encontrado.toJSON())

    return encontrado
  },
  atualizar (id, dadosParaAtualizar) {
    return Modelo.update(
      dadosParaAtualizar,
      {
        where: { id: id }
      }
    )
  },
  remover (id) {
    return Modelo.destroy({
      where: { id: id }
    })
  }
}