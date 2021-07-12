import React, { useState } from 'react';
import UserInput from './UserInput';

const NewBoxForm = (({addBox}) => {
    const INITIAL_STATE = {
        backgroundColor: '',
        height: '',
        width: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData(formData => ({
            // Gets previous fields and appends new {name: value} to list 
            //ie. {backgroundColor: 'blue'} to {backgroundColor: 'blue', height: '25px'}
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add Box is handled by BoxList adds box to boxes array
        // boxes array is an array of Box Objects
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return(
        <form onSubmit={handleSubmit}>
            <UserInput 
                name="backgroundColor"
                value={formData.backgroundColor}
                type="text"
                handleChange={handleChange}
            />
            <UserInput 
                name="height"
                value={formData.height}
                type="text"
                handleChange={handleChange}
            />
            <UserInput 
                name="width"
                value={formData.width}
                type="text"
                handleChange={handleChange}
            />
            <button>Add New Box!</button>
        </form>
    );
});

export default NewBoxForm;