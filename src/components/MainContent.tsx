import { AppliedFilters, ResultsCount} from '@yext/answers-react-components'
import React from 'react'
import SearchResults from './SeachResults'

/* 
on top we want sorting controls
under sorting we want facets on the left, then the search results next to it
at the bottom we want pagination
example from algolia: https://react-instantsearch.netlify.app/examples/e-commerce/

*/
const MainContent = () => {

    return (
        <>
            <ResultsCount 
                customCssClasses={{
                    resultCountText: "text-xl text-cyan-500"
                }}
            />
            <AppliedFilters 

            />
            <SearchResults />
            
        </>
    )
}

export default MainContent