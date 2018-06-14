import React from 'react';

const Title = (props) =>
    <div className="container">
        <h1>To do List</h1>
        <p>Task number: {props.counter}</p>
    </div>

export default Title;