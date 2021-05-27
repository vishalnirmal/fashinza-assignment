const Product = require('../models/product');

const addProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const getProducts = async (req, res) => {
    const parameters = req.body;
    const generateWhereClause = (parameters) => {
        let where = {};
        if (parameters['name']){
            where['name'] = {
                "$regex":parameters['name']
            };
        }
        if (parameters['category']){
            where['category'] = parameters['category'];
        }
        if (parameters['price']){
            let filter = {};
            if (parameters['price']['min']){
                filter['$gte']=parameters['price']['min'];
            }
            if (parameters['price']['max']){
                filter['$lte']=parameters['price']['max'];
            }
            where['price'] = filter;
        }
        return where;
    }
    try {
        let products = await Product.find(generateWhereClause(parameters));
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            message: "Done"
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const updateInfo = req.body;
    try {
        let updatedProduct = await Product.findById(id);
        for (let key of Object.keys(updateInfo)){
            updatedProduct[key] = updateInfo[key];
        }
        await updatedProduct.save();
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports = {
    addProduct,
    getProducts,
    deleteProduct,
    updateProduct
}