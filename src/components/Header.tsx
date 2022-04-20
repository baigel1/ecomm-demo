import React from 'react'
import { SearchBar } from '@yext/answers-react-components'
import logo from '../images/yext-logo.png'

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-slate-600 to-cyan-400 h-68">
            
        
            <div className="flex flex-col items-center">
                <img src={logo} className="h-10 my-5" alt="yext logo"/>
                <div className="my-2 text-2xl">
                    Find some cool clothes below
                </div>
                <div className="my-2 w-3/6 mt-10">
                    <SearchBar placeholder="search here..." />
                    
                </div>
                
            </div>
        </div>
    )
}

export default Header