const express = require ('express')
const controller = require ('../controllers/estudioController')
const router = express.Router()

router.get('/', controller.getAll)

router.post('/', controller.createEstudio )

router.patch('/:id', controller.updateOne)

router.delete('/:id', controller.deleteEstudio)

module.exports = router