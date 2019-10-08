import React from 'react';
const Car = props => (
    <React.Fragment>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button className="btn-success" onClick={props.incrementPrice}>&uarr;</button>
        <button className="btn-danger" onClick={props.decrementPrice}>&darr;</button>
    </React.Fragment>
);

export default Car;