import { PrismaClient } from "@prisma/client"
import express from "express"
import cors from 'cors'

const prisma = new PrismaClient() //Prisma client
const app = express() // App

app.use(express.json()) // Definir metodo de transferencia de dados
app.use(cors()) // Habilitar outras paginas acessarem o back

//! USA JSON PARAMS

//! Rota post/criar
app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name
        }
    })

    res.status(201).json(req.body)
})

//! Rota get/buscar
app.get('/usuarios', async (req, res) => {

    let users;

    if (req.query.name) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name
            }
        });
    } else {
        users = await prisma.user.findMany();
    }

    res.status(200).json(users);

});

//! USA ROUTE PARAMS

//! Rota delete/excluir
app.delete('/usuarios/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ mensage: "banido" })
})

//! Rota put/editar
app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.nome
        }
    })

    res.status(201).json(req.body)
})

app.listen(3000) // Definir a porta
