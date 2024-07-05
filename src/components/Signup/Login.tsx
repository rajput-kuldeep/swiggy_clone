import { auth } from '@/firebase/setup';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

const [phone, setPhone] = useState("")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const [user, setUser] = useState<any>(null)
const [otp, setOtp] = useState("")

const navigate = useNavigate()

const sendOtp = async() => {

  
   try {
    const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
    const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
    setUser(confirmation)
   } catch (error) {
    console.log(error);
    
   }

   
}
const varifyOtp = async () => {
  try {
    const data = await user.confirm(otp)
    data.user.PhoneNumber && toast.success("Login is Successful")
    data.user.PhoneNumber &&
    setTimeout(() => {
      navigate("/")
    }, 2000)
    
  } catch (error) {
    console.error(error)
  }
 }
  return (

    <>
    <ToastContainer  autoClose={3000}/>
      
              <p className="text-3xl font-semibold ">Login  </p>

              <div className="flex gap-5 flex-col mt-10">

                <PhoneInput 
                inputStyle={{height:"60px", width:"380px"}}
                containerStyle={{marginTop : "30px"}}
                value={phone}
                placeholder="Phone Number"
                onChange={ (phone)=> setPhone("+" + phone)}
                />
                <div id='recaptcha' className='mt-5'></div>
                <button onClick={sendOtp} className="w-96 py-3 bg-orange-500 font-bold text-white">SEND OTP</button>

                 {user && <input onChange={ ((e) => setOtp(e.target.value))} type="text" name="" id="" placeholder="One Time Password" className="border-[1px] border-black w-96 py-4 text-start pl-5" />}
                {otp && <button onClick={varifyOtp} className="w-96 py-3 bg-orange-500 font-bold text-white">VARIIFY OTP</button>}

              </div>
              <p className="text-xs mt-3 tracking-wide pr-14 ">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
         
          

      
    </>
  )
};

export default Login
