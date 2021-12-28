const Modelo = require('./ModeloTask')

module.exports = {
  listar (idProject) {
    return Modelo.findAll({
      where: {
        projectId: idProject
      }
    })
  },
  inserir (dados) {
    return Modelo.create(dados)
  },
  remover (idTask, idProject) {
    return Modelo.destroy({ 
      where: {
        id: idTask,
        projectId: idProject
      }
    })
  },
async pegarPorId (idTask, idProject) {
    const encontrado = await Modelo.findOne({
      where: {
        id: idTask,
        projectId: idProject
      },
      raw: true
    })

    if (!encontrado) {
      throw new Error ('Produto não encontrado!')
    }

    return encontrado
  },
  atualizar (dadosDaTask, dadosParaAtualizar) {
    return Modelo.update(
      dadosParaAtualizar,
      {
        where: dadosDaTask
      }
    )
  }
}