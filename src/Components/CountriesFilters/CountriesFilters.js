import './CountriesFilters.css';
import { selectArrayObject, orderArrayObject } from '../../utils/arrays';
import { useState } from 'react';

const CountriesFilters = ({data, setter, resetFilters, setResetFilters}) => {
    const [inputName, setInputName] = useState('');
    const sortingOptions = [
        {
            type: 'asc',
            attr: 'name',
            text: 'Sort. Asc. dupa Tara',
        },
        {
            type: 'desc',
            attr: 'name',
            text: 'Sort. Desc. dupa Tara',
        },
        {
            type: 'asc',
            attr: 'name',
            text: 'Sort. Asc. dupa Regiune',
        },
        {
            type: 'desc',
            attr: 'name',
            text: 'Sort. Desc. dupa Regiune',
        },
        {
            type: 'asc',
            attr: 'name',
            text: 'Sort. Asc. dupa Populatie',
        },
        {
            type: 'desc',
            attr: 'name',
            text: 'Sort Desc. dupa Populatie',
        },
    ]

    const handleResetFilters = () => {
        setInputName('');
        setResetFilters(!resetFilters)
    }

    const handleInputChange = (e) => {
        setInputName(e.target.value);
        selectArrayObject(data, setter, 'name', e.target.value)
    }

    return (
        <div className='d-flex justify-content-end my-5'>
            <button onClick={() => handleResetFilters()} className='btn btn-primary me-3'>Reset Filters</button>
            <input onChange={(e) => handleInputChange(e)} value={inputName} className='form-control w-25 me-3' type='text' placeholder='Tara...' />
            <select onChange={(e) => orderArrayObject(data, setter, e.target.value.attr, e.target.value.type)} className='form-control w-25'>
                {sortingOptions.map((option, index) => (
                    <option key={index} value={{type: option.type, attr: option.attr}}>{option.text}</option>
                ))}
            </select>
        </div>
    )
}

export default CountriesFilters;