import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Weather } from '@/data/types';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import axios from 'axios';





const RestaurantsCardList = () => {
  const [restaurants, setRestaurants] = useState<Weather[]>([]);
  const [searchText, setSearchText] = useState<string>('')
  const [filteredRestaurant, setFilteredRestaurant] = useState<Weather[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  console.log('component rendered', restaurants)




  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        console.log('Fetching restaurants...');
        const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        console.log('API response data:', response.data);
        const restaurantsData = response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (restaurantsData && Array.isArray(restaurantsData)) {
          
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
      

        <div className='w-full mt-5 p-4'>
          <input type="text" value={searchText} className='border-1 bg-orange-600' onChange={((e) => setSearchText(e.target.value))} />
          <button className='bg-orange-600 p-1 rounded-xl' onClick={(() => {
            const filteredRestaurants = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(filteredRestaurants)
            })}>Search</button>
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
