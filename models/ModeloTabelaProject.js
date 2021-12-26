//configurar tabela principal do database

const { HasMany } = require('sequelize')
const Sequelize = require('sequelize')
const instancia = require('../api/data')
const ModeloTask = require('./ModeloTask')

const colunas = {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description:{
    type: Sequelize.STRING,
    allowNull: false
  }

}

const opcoes = {
  freezeTablename: true,
  tableName: 'project',
  timestamps: true
}


const Project = instancia.define('project', colunas, opcoes)
Project.hasMany(ModeloTask)
ModeloTask.belongsTo(Project)

module.exports = Project
