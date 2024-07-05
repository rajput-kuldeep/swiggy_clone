import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Weather } from '@/data/types';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import axios from 'axios';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel';





const RestaurantsCardList = () => {
  const [restaurants, setRestaurants] = useState<Weather[]>([]);
  // const [searchText, setSearchText] = useState<string>('')
  const [filteredRestaurant, setFilteredRestaurant] = useState<Weather[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  console.log('component rendered', restaurants)




  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        console.log('Fetching restaurants...');
        const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        console.log('API response restaurantsData:', response.data);
        const restaurantsData = response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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
               <RestaurantCard  restaurant={restaurant} /> </Link>
          
        ))}
      </div>
    </div>

  );
}

export default RestaurantsCardList
