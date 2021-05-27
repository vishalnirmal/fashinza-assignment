const router = require('express').Router();
const {
    addProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    getCategories
} = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get("/categories", getCategories);

module.exports = router;