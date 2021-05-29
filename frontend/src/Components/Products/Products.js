import React from 'react'
import Product from '../Product/Product';
import Popup from '../Popup/Popup';
import {useDispatch, useSelector} from 'react-redux';
import {deleteProductWithId} from '../../redux/actions/product';
import './Products.scss';

const filterProducts = ({name, min, max, category}, products=[]) => {
    return products.filter(product => {
        if (name && product.name.indexOf(name) === -1)
            return false;
        if (min && product.price < min)
            return false;
        if (max && product.price > max)
            return false;
        if (category && product.category !== category)
            return false;
        return true;
    });
}

function Products() {
    const dispatch = useDispatch();
    const {products, filter} = useSelector(state=>state);
    const {loading, error, data} = products;
    const filteredProducts = filterProducts(filter, data);
    const deleteProduct = async (id) => {
        dispatch(deleteProductWithId(id));
    }
    return (
        <div className="products">
            {
                loading?
                <h1 className="products__message">Loading</h1>:
                error?
                <h1 className="products__message">Unable to load Products</h1>:
                filteredProducts.length === 0?
                <h1 className="products__message">No Products to show</h1>:
                filteredProducts.map(product=>(<Product key={product._id} {...product} deleteProduct={deleteProduct} />))
            }
            <Popup/>
        </div>
    )
}

export default Products