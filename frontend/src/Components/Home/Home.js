import React, { useEffect } from 'react';
import Filter from '../Filter/Filter';
import Products from '../Products/Products';
import './Home.scss';
import { getProducts } from '../../redux/actions/products';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categories';


function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts({}));
        dispatch(getCategories());
    }, [dispatch]);
    return (
        <div className="home">
            <Filter/>
            <Products/>
        </div>
    )
}

export default Home;