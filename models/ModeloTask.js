// representar a tabela 

const Sequelize = require('sequelize')
const instancia = require('../api/data')


const colunas = {
  title:{
      type: Sequelize.STRING,
      allowNull: false
  },
  taskRelevance: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}



const opcoes = {
  freezeTablename: true,
  tableName: 'tasks',
  timestamps: true
}

const Task = instancia.define('task', colunas, opcoes)

module.exports = Task