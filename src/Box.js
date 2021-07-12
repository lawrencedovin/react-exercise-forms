import React from 'react';
import './Box.css';

const Box = (({id, handleRemove, backgroundColor, width, height}) => {
    const boxStyle = {
        backgroundColor: backgroundColor,
        height: `${height}px`,
        width: `${width}px`
    };

    const remove = () => handleRemove(id);

    return (
        <div>
            <div id={id} className="Box" style={boxStyle}></div>
            <button onClick={remove}>X</button>
        </div>
    );
});

export default Box;