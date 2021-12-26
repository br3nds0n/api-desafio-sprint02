const Modelo = require("./ModeloTabelaProject")

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
      }
    })

    if (!encontrado) {
      throw new Error('Projeto não encontrado')
    }

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