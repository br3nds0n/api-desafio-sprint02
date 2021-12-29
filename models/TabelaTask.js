const Modelo = require('./ModeloTask')
const instancia = require('../api/data')

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
  },
  subtrair(idTask, idProject, campo, taskRelevance){
    return instancia.transaction(async transacao => {
      const task = await Modelo.findOne({
        where: {
          id: idTask,
          projectId: idProject 
        }
      })

      console.log(task.toJSON())
      task[campo] = taskRelevance
      await task.save()
      return task
    })
  },
  adicionar (idTask, idProject, campo, taskRelevance){
    return instancia.transaction(async transacao => {
      const task = await Modelo.findOne({
        where: {
          id: idTask,
          projectId: idProject 
        }
      })

      console.log(task.toJSON())
      task[campo] = taskRelevance
      await task.save()
      return task
    })
  }
}