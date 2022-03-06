import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Add Category', () => {

    const setCategories = jest.fn();

    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('debe mostrar correctamente el snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Demon Slayer';
        input.simulate('change', { target: { value } });
    });

    test('no debe postear la información onsubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe postear la información onsubmit', () => {
        const value = 'Demon Slayer';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
        expect( wrapper.find('input').prop('value') ).toBe('');
    });

});