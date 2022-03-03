import React from 'react';
import PropTypes from 'prop-types';
// Funcional component

const FirstApp = ({ name, subtitulo }) => {

    const saludo = `Hola, ${name}`;
    const persona = {
        name: 'Julián Mora',
        age: 20
    };

    return (
        <>
            <h1> { saludo } </h1>
            <pre> { JSON.stringify(persona, null, 3) } </pre>
            <p>{ subtitulo }</p>
        </>
    );
};

FirstApp.propTypes = {
    name: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
    subtitulo: 'Mi primera APP'
};

export default FirstApp;