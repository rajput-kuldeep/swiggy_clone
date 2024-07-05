import { Weathers } from "@/data/data";
import axios from "axios";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId: string |undefined) => {

    const [resInfo, setResInfo] = useState<Weathers | null >(null)
    // const [menuInfo, setMenuInfo] = useState<MenuHeader>()
    console.log("id", resId)

    useEffect(() => {
        fetchRestaurantsMenu();
        }, []);

        const fetchRestaurantsMenu = async () => {
           
              console.log('Fetching restaurants...');
              const response = await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
              console.log('API response dataMenu:', response.data);
              const restaurantsMenuData = response.data
              console.log("this is restautantmenudata", restaurantsMenuData)

            // const menuData  = response.data?.data?.cards[2]?.card?.card?.info
              
              setResInfo(restaurantsMenuData);
              // setMenuInfo(menuData)
             
            
        }



    return resInfo;
    // return menuInfo
}

export default useRestaurantMenu;

// data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards;