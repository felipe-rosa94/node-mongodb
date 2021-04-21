require('dotenv').config()
const app = require('../src/app')
const http = require('http')

const httpServer = http.createServer(app)

httpServer.listen(process.env.PORT)
httpServer.on('error', onError)

console.log('API MongoDB rodando')

function onError(error) {
    if (error.syscall !== 'listen')
        throw error

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requer privilégios elevados')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' já está em uso')
            process.exit(1)
            break
        default:
            throw error
    }
}
