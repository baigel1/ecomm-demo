import React from 'react'
import { StandardCard, UniversalResults, VerticalResults } from '@yext/answers-react-components'


/**
 * for the search results we want photos (product prominent image cards)
 * maybe a category, title, descriptiong (cap at 50 characters with an ellipsis), price, rating
 * 
 * phase 2: upon clicking a result we want to pop open a modal to get more details with an option to add to cart
 * 
 */
const SearchResults = () => {
    return (
        <VerticalResults 
        CardComponent={
        ({result}) => {
            console.log(result)
            return (
                <StandardCard result={result}/>
            )
        }
       
    }
        />
    )
}

export default SearchResults