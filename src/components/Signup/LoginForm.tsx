import { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";


type LoginProp = {


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setLogin: any;
}

const LoginForm:React.FC<LoginProp> = ({setLogin}) => {

    const [isLogin, setIsLogin] = useState(true)

    const toggleAuth = () => {
        setIsLogin(!isLogin);
      };
    

     
    return (
        <div>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0  bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">

                        <div className=" p-10 relative transform overflow-hidden h-screen  bg-white text-left shadow-xl transition-all sm:w-4/12 sm:max-w-lg">
                            <h1 className="cursor-pointer text-xl mb-14" onClick={() => setLogin(false)}> X </h1>

                            <div>
                            
        {isLogin ? (
          <Login />
        ) : (
          <Signin />
        )}
        <div className="text-center">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <button
                onClick={toggleAuth}
                className="text-orange-600 hover:underline"
              >
                Signup
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                onClick={toggleAuth}
                className="text-orange-600 hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default LoginForm
