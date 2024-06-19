import React, { useState } from 'react'
import { Card } from './ui/card'




const Header:React.FC = () => {

    const [btnNameReact, setBtnNameReact] = useState('login')
    

    return (
        <>
        <div className="w-full flex items-center justify-between px-10 py-2 shadow-xl">
        <div>
            <img src="logo.png" alt="" className="w-20 rounded-[100%]"/>
        </div>
        <div>
           <ul className="flex gap-12 text-lg font-semibold ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <Card />
            <button
            onClick={(() => {
                btnNameReact === 'login'? setBtnNameReact('logout') : setBtnNameReact('login')
            })}>
                {btnNameReact}
            </button>
           </ul>
        </div>
        </div>
        </>
    )
}

export default Header
