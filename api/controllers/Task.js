const TabelaTask = require('../../models/TabelaTask')

class Task {
  constructor ({ id, title, taskRelevance, completed, projectId, createdAt, updatedAt  }) {
    this.id = id
    this.title = title
    this.taskRelevance = taskRelevance
    this.completed = completed
    this.projectId = projectId
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  async criar () {
    const resultado = await TabelaTask.inserir({
      title: this.title,
      taskRelevance: this.taskRelevance,
      completed: this.completed,
      projectId: this.projectId
    })

    this.id = resultado.id
    this.createdAt = resultado.createdAt
    this.updatedAt = resultado.updatedAt

  }
}

module.exports = Task