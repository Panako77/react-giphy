import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    console.log(setCategories);

    const [inputValue, setInputValue] = useState('');

    const handelInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('submit hecho');
        if (inputValue.trim().length > 2) {
            
            setCategories( (oldArray) => [inputValue, ...oldArray ]);
            setInputValue('');
        }
    }

    return (


        <form onSubmit={ handleSubmit }>
            {/* <h2>Add Category</h2> */}
            <input 
                type="text" 
                value={ inputValue } 
                onChange={ handelInputChange } 
                placeholder='Buscar gif' 
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}