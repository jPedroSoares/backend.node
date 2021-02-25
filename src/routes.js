'use strict'
const express = require('express')
const routes = express.Router()
const userController = require('./controllers/User')

routes.get('/', (req, res) => {
    res.json({ message: "Crud nodeJs" })
})

routes.get('/user', (req, res) => {
    const response = userController.getUser(req, res)
    return response
})

routes.get('/user/:id', (req, res) => {
    const response = userController.indexUser(req, res)
    return response
})

routes.post('/user', userController.store)

module.exports = routes