var express = require('express');
var router = express.Router();
var controllers = require('../controller/productController')

router.post('/', controllers.vapeCreate)
router.get('/', controllers.vapeShow)
router.put('/:id', controllers.vapeUpdate)
router.delete('/:id', controllers.vapeDelete)
router.get('/cart/:id', controllers.vapeCart)

module.exports = router
