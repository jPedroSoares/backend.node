const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const server = express()
mongoose.connect('mongodb+srv://<username>:<password>@cluster0-c5q2b.mongodb.net/<bd>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
server.use(express.json())
server.use(cors())
server.use(routes)

server.listen(3333)
console.log('Server running on port 3333...')