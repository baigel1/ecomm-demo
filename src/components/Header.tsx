import React from 'react'
import { SearchBar } from '@yext/answers-react-components'

const Header = () => {
    return (
        <div className="ml-6">
            <SearchBar customCssClasses={{container: "w-full mb-0 mr-6"}}/>
        </div>
    )
}

export default Header