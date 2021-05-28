import React, {useEffect} from 'react'
import Product from '../Product/Product';
import Popup from '../Popup/Popup';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions/products';
import {getCategories} from '../../redux/actions/categories';
import {deleteProductWithId} from '../../redux/actions/product';
import './Products.scss';

function Products() {
    const dispatch = useDispatch();
    const {products, filter, product} = useSelector(state=>state);
    const {loading, error, data} = products;
    const {success, type} = product;
    const productError = product.error;
    useEffect(()=>{
        dispatch(getCategories());
    }, [dispatch]);
    useEffect(()=>{
        dispatch(getProducts(filter));
    }, [dispatch, filter]);
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
                data.length === 0?
                <h1 className="products__message">No Products to show</h1>:
                data.map(product=>(<Product key={product._id} {...product} deleteProduct={deleteProduct} />))
            }
            {
                (success||productError)?<Popup type={type} success={success} error={productError}/>:""
            }
        </div>
    )
}

export default Products