require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const {DB_MONGO} = process.env
const app = express()
app.use(cors({origin: '*'}))
app.use(express.json({limit: '50mb', type: ['application/json', 'text/plain']}))
mongoose.connect(DB_MONGO, {useNewUrlParser: true})
mongoose.connection.on('open', () => {
    console.log('conectado')
})

const index = require('./routes/index-route')
app.use('/', index)

const mongodb = require('./routes/mongodb-route')
app.use('/mongodb', mongodb)

module.exports = app
