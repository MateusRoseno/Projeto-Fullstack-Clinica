import express from 'express'
import userRouter from './router.js'
import User from './models/User.js'
import config from './config/database.js'
import { Sequelize } from 'sequelize'

const app = express()
const sequelize = new Sequelize(config)

User.init(sequelize)

app.use(express.json())
app.use('/usuarios', userRouter)

sequelize.authenticate().then(() => {
    app.listen(3000, () => console.log("Rodando porta 3000"))
}).catch(
    err => console.error(err)
)