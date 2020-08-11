const http = require('http')
const nStatic = require('node-static')
const path = require('path')

const HOST = '0.0.0.0'
const PORT = 8080
const FOLDER = path.resolve(__dirname, '..', 'coverage')
const coverageServer = new nStatic.Server(FOLDER)

const server = http.createServer(function (req, res) {
    coverageServer.serve(req, res);
})

server.listen(PORT, HOST)
server.on('listening', () => console.log(`Coverage report running on http://${HOST}:${PORT}`))
server.on('error', (err) => new Error(err))
