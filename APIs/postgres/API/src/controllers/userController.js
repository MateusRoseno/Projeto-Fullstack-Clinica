import User from "../models/User.js"
import crypto from 'node:crypto'

export const createUser = async (req, res) => {

    try {

        const user = await User.create({
            id: crypto.randomUUID(),
            nome: req.body.nome
        })

        return res.status(201).json(user)

    } catch (error) {

        console.error(error)

        return res.status(500).json({
            error: error.message
        })
    }
}

export const getAllUsers = async (req, res) => {

    try {
        const users = await User.findAll()
        res.status(200).json(users)

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: error.message
        })
    }

}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(user)

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: error.message
        })
    }
}