import React from 'react';
import './Home.sass';
import Filter from '../Filter/Filter';
import Products from '../Products/Products';
function Home() {
    return (
        <div>
            <Filter/>
            <Products/>
        </div>
    )
}

export default Home;