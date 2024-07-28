import { useEffect, useState } from "react";
import { Carousal } from "../../data/mindData"
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CDN_URL } from "@/data/types";
import { Link } from "react-router-dom";




const HomePageTopBanner = () => {
  const [restaurants, setRestaurants] = useState<Carousal[]>([]);


  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        console.log('Fetching restaurants...');
        const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        console.log('API response restaurantsData:', response.data);
        const restaurantsData = response.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
        if (restaurantsData && Array.isArray(restaurantsData)) {
          console.log("minjd data", restaurantsData)

          setRestaurants(restaurantsData);

        } else {

          setError("Invalid data format received from API");
        }
      } catch (error) {


        setError('Error fetching restaurants');

      }

    };

    fetchRestaurants();
  }, []);
  if (error) {
    return <p>{error}</p>;
  }

  if (!restaurants.length) {
    return <p>No restaurants available.</p>;
  }


  return (
    <div className=" flex flex-col px-60   bg-white mt-10  relative">
      <Carousel>
        <div>
          <h1 className="text-2xl font-bold">KULDEEP, what's on your mind?</h1>
          <div>
            <CarouselPrevious className="absolute top-[14px] left-[90%]" />
            <CarouselNext className="absolute top-[14px] right-[35px] " />
          </div>
        </div>
        <CarouselContent className="w-full">
          {restaurants.map((item) => (
            <div className="flex ">
              <Link to={item.action.link} key={item.imageId} className="w-32 mx-2 my-8" > <img src={CDN_URL + item.imageId} alt="mindImg" className="w-60 mx-2 my-8" key={item.id} /></Link>
            </div>

          ))
          }
        </CarouselContent>

      </Carousel>

    </div>
  )
};

export default HomePageTopBanner
