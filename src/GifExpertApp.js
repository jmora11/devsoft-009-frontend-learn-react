import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map(categorie =>
                        <GifGrid
                            key={ categorie }
                            category={ categorie }
                        />
                    )
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp