import React, {useState} from 'react';
import {addName, addCategory, addPrice, removeFilters} from '../../redux/actions/filter';
import {useDispatch, useSelector} from 'react-redux';
import './Filter.scss';

// const categories = ["category1", "category2", "category3", "category4", "category5", "category6", "category7", "category8", "category9", "category10"];
function Filter() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [price, setPrice] = useState({
        min: "",
        max: ""
    });
    const {loading, error, categories} = useSelector(state=>state.categories);
    const filter = useSelector(state=>state.filter);
    const changeName = (e) => {
        setName(e.target.value);
    }
    const changePrice = (e) => {
        setPrice(oldPrice=>{
            return {
                ...oldPrice,
                [e.target.name]: e.target.value
            }
        });
    }
    const handleNameSubmit = (e)=>{
        e.preventDefault();
        dispatch(addName(name));
    }
    const handlePriceSubmit = (e)=>{
        e.preventDefault();
        dispatch(addPrice(price));
    }
    const handleCategorySubmit = (category)=>{
        dispatch(addCategory(category));
    }
    const resetFilter = ()=>{
        dispatch(removeFilters());
        setName("");
        setPrice({
            min: "",
            max: ""
        });
    }
    return (
        <div className="filter">
            <form className="filter__search" onSubmit={handleNameSubmit}>
                <input type="text" className="filter__search__input" label="name" name="name" id="name" value={name} onChange={changeName} placeholder="Search" autoComplete="off"/>
                <button type="submit" className="filter__search__button"><i className="fas fa-search"></i></button>
            </form>
            <div className="filter__category">
                <h4 className="filter__category__heading">Filter by category</h4>
                <div className="filter__category__list">
                    {
                        loading?
                        <h2>Loading</h2>:
                        error?
                        <h2>Unable to fetch list of categories</h2>:
                        categories.map(category=>{
                            return <p className={(filter.category === category?"selected":"")+" filter__category__list__item"} onClick={()=>handleCategorySubmit(category)}>{category}</p>
                        })
                        
                    }
                </div>
            </div>
            <form className="filter__price" onSubmit={handlePriceSubmit}>
                <input type="number" className="filter__price__input" label="min" name="min" id="min" value={price.min} onChange={changePrice} placeholder="Min" autoComplete="off"/>
                <input type="number" className="filter__price__input" label="max" name="max" id="max" value={price.max} onChange={changePrice}  placeholder="Max" autoComplete="off"/>
                <button type="submit" className="filter__price__button">Apply</button>
            </form>
            <button className="filter__reset" onClick={resetFilter}>Reset Filters</button>
        </div>
    )
}

export default Filter;
