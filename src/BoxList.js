import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';
import {v4 as uuid} from 'uuid';

const BoxList = (() => {
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        // ...boxes saves previous boxes and only adds new Box
        setBoxes(boxes => [...boxes, {id: uuid(), ...newBox}])
    }

    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComponents = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id} 
            backgroundColor={box.backgroundColor} 
            height={box.height} 
            width={box.width} 
            handleRemove={remove}/>
    ));

    return (
        <>
            <h1>Boxes List</h1>
            <NewBoxForm addBox={addBox}/>
            {boxComponents}
        </>
    );
});

export default BoxList;