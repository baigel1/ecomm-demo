import React from 'react'
import { UniversalResults } from '@yext/answers-react-components'

const SearchResults = () => {
    return (
        <UniversalResults 
        verticalConfigMap={{
            'products': {
                label: "cloth",
                
            }
        }}
        />
    )
}

export default SearchResults