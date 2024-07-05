
import { useParams } from "react-router-dom";
import useRestaurantMenu from "@/utils/useRestaurantMenu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import { useContext } from "react";
import UserContext from "@/utils/UserContext";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";
import MenuHeader from "./MenuHeader";
import { Card } from "../ui/card";




const RestaurantsMenu = () => {

  const { resId } = useParams()

  const data = useContext(UserContext)
  console.log("this is userContext loggedInUser", data.loggedIn)



  const resInfo = useRestaurantMenu(resId)

  console.log("this is res info", resInfo)

  if (resInfo === null) return <Shimmer />

  // const categories = resInfo?.card?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cards) => cards?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")



  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cards) => cards?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


  console.log("this is resinfo", typeof categories, categories)

  const menuHeader = resInfo?.data?.cards[2]?.card?.card?.info

  console.log("this is menuHeader", typeof menuHeader, menuHeader)


  return (
    < div className="w-[60%] m-auto">
      <div className="flex m-auto relative mt-20 rounded-xl">
        <div className=" w-full shadow-2xl">
          <div>
            <h1 className="text-2xl font-bold mb-5 pl-6">{menuHeader?.name}</h1>
          </div>
          <div className="w-full shadow-2xl rounded-xl pl-6 border-[1px] py-5 flex flex-col gap-1 mb-5">
            <div className="flex gap-3 font-bold">
              <p>{menuHeader?.avgRating}</p>
              <p>{(menuHeader?.totalRatingsString)}</p>
              <p>. {menuHeader?.costForTwoMessage}</p>
            </div>
            <p className="font-bold text-orange-600">{menuHeader?.cuisines?.join(",")}</p>
            <ul className="flex flex-col gap-3">
              <li className="font-bold ">Outlet <span className="text-xs font-normal ml-4 text-gray-600">{menuHeader?.areaName}</span></li>
              <li className="font-bold">{menuHeader?.sla.slaString}</li>
            </ul>
            <div className="border-[1px]"></div>
            <div className="text-sm font-medium text-gray-500 flex gap-2">
              <p>{menuHeader?.sla.lastMileTravelString}</p>
              <p>₹{(menuHeader?.feeDetails.totalFee) / 100}Delivery fee will apply</p>
            </div>
          </div>
        </div>
      </div>


      <div>

        {
          categories.map((item) => (
            <div key={item.card.card.title} className="bg-blue">


              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <div className="mt-10 px-5">
                    <AccordionTrigger>{item.card.card.title} ({item.card.card.itemCards.length})</AccordionTrigger>
                  </div>
                  <AccordionContent>

                    <MenuCard items={item.card.card.itemCards} />


                  </AccordionContent>
                </AccordionItem>
              </Accordion>



            </div>
          ))
        }

      </div>
    </div>
  )
};

export default RestaurantsMenu
