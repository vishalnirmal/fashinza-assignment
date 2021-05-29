import React, {useState, useEffect} from 'react'
import { submitForm } from '../../redux/actions/form';
import {useDispatch, useSelector} from 'react-redux';
import './AddProduct.scss';
import axios from 'axios';

function AddProduct(props) {
    const dispatch = useDispatch();
    const {loading, error, success} = useSelector(state => state.form);
    const [product, setProduct] = useState({
        name: "",
        description: "",
        category: "",
        price: ""
    });
    const type = props.type;
    const fetchAndUpdateField = async (id) => {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data);
    }
    useEffect(()=>{
        if (success){
            props.history.push("/");
        }
        if (type==="update"){
            fetchAndUpdateField(props.match.params.id);
        }
        return () => {
            resetProduct();
        }
    }, [success, props.history, type, props.match.params.id]);
    const changeProduct = (e) => {
        setProduct(oldProduct=>{
            return {
                ...oldProduct,
                [e.target.name]: e.target.value
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitForm(product, type));
    }
    const resetProduct = () => {
        setProduct({
            name: "",
            description: "",
            category: "",
            price: ""
        });
    }
    return (
        <div className="add">
            <h2 className="add__heading">{type==="add"?"Add a ": "Update"} Product</h2>
            {
                error?
                <h3 className="add__message add__message--error">{error}</h3>:
                ""
            }
            <form className="add__form" onSubmit={handleSubmit}>
                <input type="text" className="add__form__input" name="name" id="name" value={product.name} onChange={changeProduct} placeholder="Name" autoComplete="off"/>
                <textarea className="add__form__input" cols="30" rows="5" name="description" id="description" value={product.description} onChange={changeProduct} placeholder="Product Description"></textarea>
                <input type="text" className="add__form__input" name="category" id="category" value={product.category} onChange={changeProduct} placeholder="Category" autoComplete="off"/>
                <input type="number" className="add__form__input" label="price" name="price" id="price" value={product.price} onChange={changeProduct} placeholder="Price" autoComplete="off"/>
                <button type="submit" className="add__form__button" disabled={loading?true:false}>{loading?"Loading":type==="add"?"Add":"Update"}</button>
            </form>
        </div>
    )
}

export default AddProduct
