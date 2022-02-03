const express = require('express')
const controller = require('./controller')

const tvshowsRouter = express.Router()

tvshowsRouter.get('/byname/:name',(req,res)=>{
    const {name} = req.params

    controller.searchShowByName(name)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})

tvshowsRouter.get('/all',(req,res)=>{

    controller.searchAll()
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})

module.exports = tvshowsRouter