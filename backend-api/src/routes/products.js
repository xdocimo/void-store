const express = require('express');
const {getAll, getOne, create, update, deleteOne} = require('../controllers/products');
const router = express.Router();

router.get('/products', getAll)
router.get('/products/:id', getOne)
router.post('/products/', create)
router.put('/products/:id', update)
router.delete('/products/:id', deleteOne)

module.exports = router;
