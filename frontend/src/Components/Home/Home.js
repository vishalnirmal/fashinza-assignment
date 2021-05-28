import React, { useEffect } from 'react';
import Filter from '../Filter/Filter';
import Products from '../Products/Products';
import {removeFilters} from '../../redux/actions/filter';
import './Home.scss';
import { useDispatch } from 'react-redux';


function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(removeFilters());
    });
    return (
        <div className="home">
            <Filter/>
            <Products/>
        </div>
    )
}

export default Home;