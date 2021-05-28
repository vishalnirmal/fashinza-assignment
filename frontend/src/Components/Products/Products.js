import React, {useEffect} from 'react'
import Product from '../Product/Product';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions/products';
import {getCategories} from '../../redux/actions/categories';
import './Products.scss';
import axios from 'axios';

function Products() {
    const dispatch = useDispatch();
    const {products, filter} = useSelector(state=>state);
    const {loading, error, data} = products;
    useEffect(()=>{
        dispatch(getCategories());
    }, []);
    useEffect(()=>{
        dispatch(getProducts(filter));
    }, [dispatch, filter]);
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5500/products/${id}`);
        dispatch(getProducts(filter));
        dispatch(getCategories());
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
        </div>
    )
}

export default Products