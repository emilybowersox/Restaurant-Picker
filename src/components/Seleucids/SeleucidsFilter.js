import React from 'react';

const SeleucidsFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
        console.log("event.target.value is ", event.target.value);
    };


    return (
        <div>
            <label>Filter by century</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option></option>
                <option value="400">300</option>
                <option value="300">200</option>
                <option value="200">100</option>
                <option value="100">00</option>
            </select>
        </div>
    )
}

export default SeleucidsFilter;