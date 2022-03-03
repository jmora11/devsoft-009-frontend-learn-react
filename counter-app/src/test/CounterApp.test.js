import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp';
describe('Counter App Test', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe hacer match con un snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar por defecto el valor de 100', () => {
        const wrapper = shallow( <CounterApp numero={ 100 }/> );
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('100');
    });
   
    test('debe de incremetar contador', () => { 
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');
    });

    test('debe de decremetar contador', () => { 
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');
    });

    test('debe de reiniciar contador', () => { 
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe("10");
    });
});