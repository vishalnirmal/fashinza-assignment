const router = require('express').Router();
const {
    addProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    getCategories,
    getProduct
} = require('../controllers/productController');

router.get('/', getProducts);
router.get("/categories", getCategories);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;