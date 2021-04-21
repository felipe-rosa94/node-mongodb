require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({origin: '*'}))
app.use(express.json({type: ['application/json', 'text/plain']}))

mongoose.connect(process.env.DB_MONGO, {useNewUrlParser: true})
mongoose.connection.on('open', () => {
    console.log('conectado')
})

const index = require('./routes/index-route')
app.use('/', index)

const mongodb = require('./routes/mongodb-route')
app.use('/mongodb', mongodb)

module.exports = app
