const express = require ('express')
const app = express()

const db = require('./src/data/database')
db.connect()

//  TOdo : usar as rotas
app.use(express.json())

const estudiosRouter = require('./src/routes/estudios.routes')
app.use('/estudios', estudiosRouter)

const titulosRouter = require('./src/routes/titulos.routes')
app.use('/titulos', titulosRouter)

app.listen(3333, () => console.log('Servidor rodando na porta 3333!!! ✅'))