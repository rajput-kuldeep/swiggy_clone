


const Signin = () => {
  return (
    <>
     
    <p className="text-3xl font-semibold ">Sign up  </p>

    <div className="flex gap-5 flex-col mt-10">

      <input type="text" name="" id="" placeholder="Phone Number" className="border-[1px] border-black w-96 py-4 text-start pl-5" />
      <input type="text" name="" id="" placeholder="Name" className="border-[1px] border-black w-96 py-4 text-start pl-5" />
      <input type="text" name="" id="" placeholder="Email" className="border-[1px] border-black w-96 py-4 text-start pl-5" />

      <p className="text-md font-normal text-blue-300">Have a referral Code</p>
      <button className="w-96 py-3 bg-orange-500 font-bold text-white">CONTINUE</button>

    </div>
    <p className="text-xs mt-3 tracking-wide pr-14 ">By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
 
    </>
  )
};

export default Signin
