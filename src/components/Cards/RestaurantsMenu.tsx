
import { useParams } from "react-router-dom";
import useRestaurantMenu from "@/utils/useRestaurantMenu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Star } from "lucide-react";
import { CDN_URL } from "@/data/types";
import Shimmer from "./Shimmer";
import { useContext } from "react";
import UserContext from "@/utils/UserContext";





const RestaurantsMenu = () => {

  const { resId } = useParams()

  const data = useContext(UserContext)
  console.log("this is userContext loggedInUser",data.loggedIn)



  const resInfo = useRestaurantMenu(resId)

  console.log("this is res info", resInfo)

  if (resInfo === null) return <Shimmer />

  const categories = resInfo.filter((cards) => cards?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  // console.log("this is categories", categories)
  if (!categories) return <div>No categories found</div>


  return (
    <>
      <div>
        {
          categories.map((item) => (
            <div key={item.card.card.title} className="bg-blue">


              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.card.card.title}</AccordionTrigger>
                  <AccordionContent>
                    <div>
                      {
                        item.card.card.itemCards.map((item) => (
                          <div className="flex justify-center ">
                            <div className='flex justify-between  mb-5 w-[60%] h-52 bg-gray-200 rounded-xl object-cover hover:scale-95 hover:duration-200'>
                              <div>
                                <h1 className="font-bold text-[#414449] text-lg leading-relaxed">{item.card.info.name}</h1>
                                <p>₹ {item.card.info.price / 100}</p>

                                <p> <Star strokeWidth={2.25} className="bg-green-500 text-green-600" /> {item.card.info.ratings.aggregatedRating.rating}</p>
                                <p>{item.card.info.description}</p>
                              </div>
                              <div className=''>
                                <img
                                  src={CDN_URL + item.card.info.imageId}
                                  alt={item.card.info.name}
                                  className='object-cover bg-cover w-full h-36 rounded-xl '
                                />

                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>


                  </AccordionContent>
                </AccordionItem>
              </Accordion>



            </div>
          ))
        }

      </div>
    </>
  )
};

export default RestaurantsMenu
