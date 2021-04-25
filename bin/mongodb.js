require('dotenv').config()
const app = require('../src/app')
const https = require('https')
const fs = require('fs')
const {PORT} = process.env
let privateKey = fs.readFileSync('/home/felipe/util/node/certificate.key')
let certificate = fs.readFileSync('/home/felipe/util/node/certificate.crt')
let credentials = {key: privateKey, cert: certificate}
const httpsServer = https.createServer(credentials, app)
httpsServer.listen(PORT)
console.log('API MongoDB rodando')
