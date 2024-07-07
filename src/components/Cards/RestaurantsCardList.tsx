import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Weather } from '@/data/types';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import axios from 'axios';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel';

interface BestRestaurant {
  text: string
}




const RestaurantsCardList = () => {
  const [restaurants, setRestaurants] = useState<Weather[]>([]);
  // const [searchText, setSearchText] = useState<string>('')
  const [filteredRestaurant, setFilteredRestaurant] = useState<Weather[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [bestRestaurants, setBestRestaurants] = useState<BestRestaurant[]>([])
  const [showAllRestaurants, setShowAllRestaurants] = useState<boolean>(false);
  const [showAllCousines, setShowAllCousines] = useState<boolean>(false);
  const [cousines, setCousines] = useState<BestRestaurant[]>([])
  const [nearMe, setNearMe] = useState<BestRestaurant[]>([])

  const toggleShowAll = () => {
    setShowAllRestaurants(!showAllRestaurants);
  };
  const toggleShowAllCousines = () => {
    setShowAllCousines(!showAllCousines);
  };
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        console.log('Fetching restaurants...');
        const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        console.log('API response restaurantsData:', response.data);
        const restaurantsData = response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const bestrestaurant = response.data?.data?.cards[6]?.card?.card?.brands

        console.log(bestrestaurant)
        setBestRestaurants(bestrestaurant)
        const bestCousines = response.data?.data?.cards[7]?.card?.card?.brands
        setCousines(bestCousines)

        const NearMe = response.data?.data?.cards[8]?.card?.card?.brands
        setNearMe(NearMe)

        if (restaurantsData && Array.isArray(restaurantsData)) {
          console.log(restaurantsData)

          setRestaurants(restaurantsData);
          setFilteredRestaurant(restaurantsData);
        } else {

          setError("Invalid data format received from API");
        }
      } catch (error) {


        setError('Error fetching restaurants');

      }
      finally {
        setLoading(false);

      }
    };

    fetchRestaurants();
  }, []);



  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!restaurants.length) {
    return <p>No restaurants available.</p>;
  }






  return (

    <div>

      <div className="w-[70%] m-auto bg-white mb-10  overflow-hidden bg-cover  relative">
        <Carousel>
          <h1 className="text-2xl font-bold my-7">Top restaurant chains in Gurgaon</h1>
          <CarouselPrevious className="absolute top-[12px] left-[86%] z-10" />
          <CarouselNext className="absolute  top-[12px] left-[90%]" />
          <CarouselContent className="">
            {restaurants.map((item) => (

              <div className='flex px-4' key={item.info.id}>

                <RestaurantCard restaurant={item} />

              </div>
            ))
            }
          </CarouselContent>

        </Carousel>

      </div>


      <div className='flex flex-wrap gap-5 mb-10 px-20 items-center justify-center'>
        {filteredRestaurant?.map((restaurant) => (

          <Link key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id}>
            <RestaurantCard restaurant={restaurant} /> </Link>

        ))}
      </div>

      <div className='px-28 flex flex-col ml-20 w-full gap-10 '>
        <h1 className='text-2xl font-bold '>Best Restaurant To Eat Across Cities</h1>
        <div className='flex flex-wrap gap-8  justify-start '>
          {
            bestRestaurants.slice(0, showAllRestaurants ? bestRestaurants.length : 11).map((list) => (
              <div className='flex ' key={list.text}>


                <p className='border-[1px] w-72 text-center px-2 py-3 font-semibold text-[#414449] rounded-lg'>{list.text}</p>

              </div>
            ))
          }
          {!showAllRestaurants && (
            <button
              onClick={toggleShowAll}
              className="rounded-lg w-72 py-2 border-[1px] font-semibold "
            >
              Show More
            </button>
          )}
        </div>
      </div>


      <div>

      <div className='px-28 flex flex-col ml-20 w-full gap-10 mt-10'>
        <h1 className='text-2xl font-bold '>Best Cousines Near ME </h1>
        <div className='flex flex-wrap gap-8  justify-start '>
          {
            cousines.slice(0, showAllCousines ? cousines.length : 11).map((list) => (
              <div className='flex ' key={list.text}>


                <p className='border-[1px] w-72 text-center px-2 py-3 font-semibold text-[#414449] rounded-lg'>{list.text}</p>

              </div>
            ))
          }
          {!showAllCousines && (
            <button
              onClick={toggleShowAllCousines}
              className="rounded-lg w-72 py-2 border-[1px] font-semibold "
            >
              Show More
            </button>
          )}
        </div>
      </div>
      </div>



<div className='px-28 flex flex-col ml-20 w-full gap-10 mt-10'>
  <h1 className='text-2xl font-bold '>
  Explore Every Restaurants Near Me</h1>
      <div className='flex flex-wrap gap-8  justify-start '>
        {
          nearMe.map((data) => (
            <p className='border-[1px]  text-center px-40 py-3 font-semibold text-[#414449] rounded-lg' key={data.text}>{data.text}</p>
          ))
        }
      </div>
      </div>
    </div>

  );
}

export default RestaurantsCardList
