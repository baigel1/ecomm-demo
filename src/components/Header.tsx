import React from 'react'
import { SearchBar } from '@yext/answers-react-components'
import logo from '../images/yext-logo.png'

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-48">
            
        
            <div className="flex flex-col items-center">
                <img src={logo} className="h-10 my-5" alt="yext logo"/>
                <div className="my-2">
                    Find some cool clothes below
                </div>
                <div className="my-2">
                    <SearchBar placeholder="search here..."/>
                </div>
                
            </div>
        </div>
    )
}

export default Header