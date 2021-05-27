import React from 'react'
import './AddProduct.scss';

function AddProduct() {
    return (
        <div className="add">
            <h2 className="add__heading">Add a Product</h2>
            <form className="add__form">
                <input type="text" className="add__form__input" name="name" id="name" placeholder="name" autoComplete="off"/>
                <textarea className="add__form__input" cols="30" rows="5" name="description" id="description" placeholder="Product Description"></textarea>
                <input type="text" className="add__form__input" name="category" id="category" placeholder="Category" autoComplete="off"/>
                <input type="number" className="add__form__input" label="price" name="price" id="price" placeholder="Price" autoComplete="off"/>
                <button type="submit" className="add__form__button">Add</button>
            </form>
        </div>
    )
}

export default AddProduct
