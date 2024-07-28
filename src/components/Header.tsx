import { NavLink } from 'react-router-dom';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { useState } from 'react';
import LoginForm from './Signup/LoginForm';

interface CartItem {
  // Define the shape of a cart item
  id: number;
  name: string;
  price: number;
}

interface RootState {
  cart: {
    items: CartItem[];
  };
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector<RootState>;

const Header: React.FC = () => {
  const cartItems = useTypedSelector((store) => store.cart.items);
  console.log("this is cartItems", cartItems);

  const [login, setLogin] = useState<boolean>(false);


    return (
        <>
            <div className="w-full flex items-center justify-between px-10 py-2 shadow-xl">
                <div>
                    <img src="logo.png" alt="" className="w-20 rounded-[100%]" />
                </div>
                <div>

                    <ul className="flex gap-12 text-lg font-semibold ">
                       
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
                            <NavLink to='signin' onClick={() => setLogin(true)} >Sign In</NavLink>
                        </li>
                        <li>
                            <NavLink to='Cart'>Cart -{cartItems.length}</NavLink>
                        </li>

                    </ul>
                </div>
                {login && <LoginForm setLogin={setLogin}  />}
            </div>

            
           
        </>
    )
}

export default Header
