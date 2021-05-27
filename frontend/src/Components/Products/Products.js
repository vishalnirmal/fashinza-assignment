import React, {useEffect} from 'react'
import Product from '../Product/Product';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/actions/products';
import {getCategories} from '../../redux/actions/categories';
import './Products.scss';

function Products() {
    const dispatch = useDispatch();
    const {products, filter} = useSelector(state=>state);
    const {loading, error, data} = products;
    useEffect(()=>{
        dispatch(getProducts(filter));
        dispatch(getCategories());
    }, [dispatch, filter]);
    return (
        <div className="products">
            {
                loading?
                <h1 className="products__message">Loading</h1>:
                error?
                <h1 className="products__message">Unable to load Products</h1>:
                data.length === 0?
                <h1 className="products__message">No Products to show</h1>:
                data.map(product=>(<Product key={product._id} {...product} />))
            }
        </div>
    )
}

export default Products