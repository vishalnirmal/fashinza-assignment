const router = require('express').Router();
const {
    addProduct,
    getProducts,
    deleteProduct,
    updateProduct
} = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;