const express = require('express')
const tvshowsRouter = require('./api/resources/tvshows/routes')
const app = express()

app.use('/api/shows/search',tvshowsRouter)

app.listen(3005,()=>{console.log('server ready')})
