import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Gif Grid', () => {

    test('debe mostrar correctamente el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={ 'Demon Slayer' } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar items el snapshot', () => {

        const imgs = [{
            id: 'ABC',
            url: 'http://mock:img',
            title: 'Titke Mock'
        }];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category={ 'Demon Slayer' } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('no debe mostrar parrafo loading', () => {

        const imgs = [
            {
                id: 'ABC',
                url: 'http://mock:img1',
                title: 'Titke Mock 1'
            },
            {
                id: 'DEF',
                url: 'http://mock:img2',
                title: 'Title Mock 2'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category={ 'Demon Slayer' } /> );
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( imgs.length );
    });
});