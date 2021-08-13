const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const controller = require('../controllers/tituloController')

router.get('/marvel', controller.getAllMarvel )

router.get('/pixar', controller.getAllPixar )

router.get('/studioghibli', controller.getAllGhibli )

router.get('/', controller.getAll )

router.post('/', controller.createTittle)

router.patch("/:id", controller.updateTitulo)

router.delete("/:id", controller.deleteTitulo)

module.exports = router