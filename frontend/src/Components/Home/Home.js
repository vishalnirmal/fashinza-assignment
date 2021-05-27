import React from 'react';
import Filter from '../Filter/Filter';
import Products from '../Products/Products';
import './Home.scss';


function Home() {
    return (
        <div className="home">
            <Filter/>
            <Products/>
        </div>
    )
}

export default Home;