import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

const title = 'Demon Slayer';
const url = 'http://mock-test';

const img = {
    title,
    url
};

describe('Gif Grid Item', () => {

    let wrapper = shallow( <GifGridItem { ...img} /> );


    beforeEach( () => {
        wrapper = shallow( <GifGridItem { ...img} /> );
    });

    test('Debe mostrar el componente correctamente con props', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe tener la imagen bien la url y el alt', () => {
        const img = wrapper.find('img');
        expect ( img.prop('src') ).toBe( url );
        expect ( img.prop('alt') ).toBe( title );
    });

    test('debe tener la clase animate__fadeInBottomLeft', () => {
        const div = wrapper.find('div');
        expect( div.hasClass('animate__fadeInBottomLeft')).toBe(true);
    });
});

