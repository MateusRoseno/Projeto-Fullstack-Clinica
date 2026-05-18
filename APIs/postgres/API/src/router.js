import express from 'express'
import { createUser, getAllUsers, deleteUser } from './controllers/userController.js'

const userRouter = express.Router()
userRouter.post('/cadastro', createUser)
userRouter.get('/todos', getAllUsers)
userRouter.delete('/deletar/:id', deleteUser)

export default userRouter