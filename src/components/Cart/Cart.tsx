import { useSelector } from "react-redux"
import MenuCard from "../Cards/MenuCard"
import { Button } from "../ui/button"

interface RootState {
    cart: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: any[]
    }
  }

const Cart = () => {


    const cartItems = useSelector((store : RootState) => store.cart.items)
    console.log("cartItem", cartItems)

if (cartItems.length === 0) {
    return (
        <>

            <div className="w-full h-[90vh] flex gap-7 flex-col items-center justify-center">
                <div className="flex justify-center items-center">
                    <img src="cartmain.avif" alt="Cart is Empty" className="h-72" />
                </div>
                <div>
                    <p className="text-center font-bold text-[#535665] text-lg">Your cart is empty</p>
                    <p className="text-sm text-gray-600">You can go to home page to view more restaurants</p>
                </div>
                <div>
                    <Button className="bg-orange-600 font-semibold rounded-none hover:bg-orange-500 px-5">SEE RESTAURANTS NEAR YOU</Button>
                </div>
            </div>

            <div className="w-full h-full bg-[#E9ECEE] flex justify-center gap-16">
                <div className="flex flex-col gap-6 mt-5">
                    <div className=" bg-white  ">
                        <p className="ml-10 mr-40 mb-5 mt-10 font-bold text-md text-[#282C45]">Oops, something went wrong. Please clear your cart and try again.</p>
                        <Button className="bg-orange-600 font-semibold rounded-none hover:bg-orange-500 ml-10  text-md mb-5" >Retry</Button>
                    </div>


                    <div className=" bg-white ">
                        <p className="font-bold text-md ml-10 ">Account</p>
                        <p className="ml-10 mb-10  text-gray-600 font-medium">To place your order now, log in to your existing account or sign up.</p>
                        <div className="flex gap-4 ">
                            <Button className=" px-10 py-6 bg-white font-semibold rounded-none hover:bg-white ml-10 text-green-600 flex flex-col gap-[1px] border-[1px] border-green-600 mb-7 " ><span className="text-xs font-normal">Have an Account? </span> LOG IN</Button>
                            <Button className="px-8 py-6 bg-green-500 font-semibold rounded-none hover:bg-green-500 text-white flex flex-col gap-1 border-[1px] border-green-600 " ><span className="text-xs font-normal">New To Swiggy</span> SIGN UP</Button>
                        </div>


                    </div>

                    <div className=" bg-white">
                        <p className="ml-10  text-md font-bold text-[#93959F] py-8">Delivery address</p>

                    </div>
                    <div className=" bg-white">
                        <p className="ml-10 text-md font-bold text-[#93959F] py-7">Payment</p>

                    </div>
                </div>

                <div className="mt-5">
                    <p className="text-3xl text-[#7E808C] font-bold mb-10">Card Empty</p>
                    <img src="emptycart.avif" alt="" className="h-64" />
                    <p className="mt-4 text-gray-500">Good food is always cooking! <br /> Go ahead, order some yummy <br /> items from the menu.</p>
                </div>


            </div>
            
        </>
    )
}

return <MenuCard items={cartItems} />
}


export default Cart