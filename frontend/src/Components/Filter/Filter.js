import React from 'react';
import './Filter.scss';

const categories = ["category1", "category2", "category3", "category4", "category5", "category6", "category7", "category8", "category9", "category10"];
function Filter() {
    return (
        <div className="filter">
            <form className="filter__search">
                <input type="text" className="filter__search__input" label="name" name="name" id="name" placeholder="Search" autoComplete="off"/>
                <button type="submit" className="filter__search__button"><i className="fas fa-search"></i></button>
            </form>
            <div className="filter__category">
                <h4 className="filter__category__heading">Filter by category</h4>
                <div className="filter__category__list">
                    {
                        categories.map(category=>{
                            return <p className="filter__category__list__item" onClick={()=>console.log(category)}>{category}</p>
                        })
                    }
                </div>
            </div>
            <form className="filter__price">
                <input type="number" className="filter__price__input" label="min" name="min" id="min" placeholder="Min" autoComplete="off"/>
                <input type="number" className="filter__price__input" label="max" name="max" id="max" placeholder="Max" autoComplete="off"/>
                <button type="submit" className="filter__price__button">Apply</button>
            </form>
            <button className="filter__reset">Reset Filters</button>
        </div>
    )
}

export default Filter;
