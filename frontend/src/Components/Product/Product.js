import React, {useState} from 'react';
import './Product.scss';

function Product({name, description, price, category}) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="product">
            <h2 className="product__name">{name}</h2>
            <p className="product__category">{category}</p>
            <p className="product__description">{description}</p>
            <p className="product__price">₹ <span>{price}</span></p>
            <i className={(isClicked?"fa-times":"fa-bars")+" fas product__menu-button"} onClick={()=>setIsClicked(!isClicked)}></i>
            <div className={(isClicked?"show":"")+" product__menu"}>
                <p className="product__menu__item">Update</p>
                <p className="product__menu__item">Delete</p>
            </div>
        </div>
    )
}

Product.defaultProps = {
    name: "Item 1",
    description: "This is a short description about item 1.",
    price: 2499,
    category: "category1"
}

export default Product
