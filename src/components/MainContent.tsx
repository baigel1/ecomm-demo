import React from 'react'
import SearchResults from './SeachResults'
import FacetSection from './FacetSection'

/* 
on top we want sorting controls
under sorting we want facets on the left, then the search results next to it
at the bottom we want pagination
example from algolia: https://react-instantsearch.netlify.app/examples/e-commerce/

*/
const MainContent = () => {
    
    return (
        <div className="flex">

            <FacetSection />
          
            <SearchResults />
            
        </div>
    )
}

export default MainContent