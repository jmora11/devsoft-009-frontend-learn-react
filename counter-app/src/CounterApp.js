import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ numero = 10 }) => {

    // Hook
    const [counter, setCounter] = useState( numero );

    // Handle Add
    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleReset = () => {
        setCounter(numero);
    };

    const handleSubtract = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    );
};

CounterApp.propTypes = {
    numero: PropTypes.number
};

export default CounterApp;
