import React from 'react';
import './search-box.styles.css';

// we can destructure props object immediately into placeholder and handleChange function
//export const SearchBox = (props) => {
export const SearchBox = ({placeholder, handleChange}) => (
    <input className='search' type='search' placeholder={placeholder} 
        onChange={handleChange} />
);