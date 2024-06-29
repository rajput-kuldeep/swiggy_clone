import { NavLink } from 'react-router-dom'
import useOnlineStatus from '@/utils/useOnlineStatus'




const Header:React.FC = () => {

    const onlineStatus = useOnlineStatus()


    

    return (
        <>
        <div className="w-full flex items-center justify-between px-10 py-2 shadow-xl">
        <div>
            <img src="logo.png" alt="" className="w-20 rounded-[100%]"/>
        </div>
        <div>

           <ul className="flex gap-12 text-lg font-semibold ">
            <li>
                <h1>status : {onlineStatus ? 'online' : 'offline'}</h1>
            </li>
            
                <li><NavLink to='/'>Swigy Corporate</NavLink> </li>
                
            
             <li>
                <NavLink to='/Search'>Search</NavLink>
            </li>
            <li>
                <NavLink to='offers'>Offers</NavLink>
            </li>
            <li>
                <NavLink to='help'>Help</NavLink>
            </li>
            <li>
                <NavLink to='signin'>Sign In</NavLink>
            </li>
            <li>
                <NavLink to='Cart'>Cart</NavLink>
            </li> 
            
            
           </ul>
        </div>
        </div>
        </>
    )
}

export default Header
