import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: imagenes, loading } = useFetchGifs(category);

    return (
        <>
            <h1 className='animate__animated animate__bounce'>{category}</h1>

            { loading && <p>Loading...</p> }

            <div className='card-grid'>
                {
                    imagenes.map( img =>
                        <GifGridItem
                            key={ img.id }    
                            { ...img }
                        />  
                    )
                }
            </div>
        </>
    )
};
