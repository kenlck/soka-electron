const serveStatic = require('serve-static')
const express = require('express')

const appServer = express()
appServer.use(serveStatic(`src/build`, {index: ['index.html']}))
// app.use(express.static(__dirname + '/src/build'));

appServer.listen(3002)
