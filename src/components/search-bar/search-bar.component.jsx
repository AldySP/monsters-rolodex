import React from 'react'
import './search-bar.styles.css'

const SearchBar = ({ handleSearch }) => {
    return (
        <div>
            <input 
                type="text" 
                placeholder='Search monster...' 
                onChange={(e) => handleSearch(e.target.value)}
                className='search'
            />
        </div>
    )
}

export default SearchBar;