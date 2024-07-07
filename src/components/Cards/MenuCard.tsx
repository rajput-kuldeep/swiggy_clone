import { FaStar } from "react-icons/fa6";

import { ItemCardsEntity } from "@/data/data";
import { CDN_URL } from "@/data/types";

import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "@/Store/CartSlice";


interface MenuCardProps {
    items : ItemCardsEntity[]
}

const MenuCard = ({items} : MenuCardProps ) => {

      const dispatch = useDispatch()

const handleAddItem = (item: ItemCardsEntity) => {
  dispatch(addItem(item))
}


    return (
       <div className="">
        {
            items.map((item) => (
                <div className="" key={item.card.info.id}>
                          <div className="flex justify-center items-center ">
                            <div className='flex justify-evenly items-center mb-5 w-full px-5 h-52 rounded-xl  '>
                              <div className="leading-normal">
                                
                                <h1 className="font-bold text-[#414449] text-lg leading-relaxed">{item.card.info.name}</h1>
                                <p className="text-[16px] font-semibold">₹ {item.card.info.price /100}</p>

                                <h5 className="flex gap-1 font-bold text-green-600 "> <FaStar className="text-green-600 mt-1" /> {item.card.info.ratings.aggregatedRating.rating}</h5>
                                <p className="pr-28">{item.card.info.description}</p>
                              </div>
                              <div className='w-64 h-40 relative'>
                                <img
                                  src={CDN_URL + item.card.info.imageId}
                                  alt={item.card.info.name}
                                  className='object-cover bg-center w-full h-full  rounded-xl '
                                />
                                <Button className="text-green-600 text-lg font-bold bg-white hover:bg-gray-300 border-2 px-8 absolute top-[8em] left-4 "
                                onClick={() => handleAddItem(item)}
                                >ADD</Button>
                                

                              </div>
                            </div>
                          </div>
                          <div className="w-[60%] h-[1.2px] bg-gray-300 m-auto"></div>
                          </div>
            ))
        }
       </div>
    )
};

export default MenuCard

