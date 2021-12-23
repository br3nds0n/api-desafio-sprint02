const ModeloTabela = require('../../models/ModeloTabelaProject')


ModeloTabela
   .sync()
   .then(() => console.log('Tabela criada com sucesso!'))
   .catch(console.log)