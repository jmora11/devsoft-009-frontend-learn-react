import React from 'react';
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Gif Expert APP', () => {

    let wrapper = shallow( <GifExpertApp defaultCategories={ [] }/> );

    beforeEach( () => {
        wrapper = shallow( <GifExpertApp defaultCategories={ [] } /> );
    });

    test('debe hacer match con el snapshot', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
        const categories = ['Naruto', 'Demon Slayer'];
        wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
});