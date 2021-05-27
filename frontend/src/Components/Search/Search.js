import React from 'react'

function Search() {
    return (
        <form className="search">
                <input type="text" className="search__input" label="name" name="name" id="name" placeholder="Search" autoComplete="off"/>
                <button type="submit" className="search__button"><i className="fas fa-search"></i></button>
        </form>
    )
}

export default Search
