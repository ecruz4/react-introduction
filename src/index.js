import React from 'react';

import ReactDOM from 'react-dom';


const App = () => {
    const buttonText = { text: 'Click Here' };
    const labelText = 'Enter Name:'
    return (
        <div>
            <label htmlFor="name" className="label">{labelText}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));

//Cannot render JS Objects as Text using JSX