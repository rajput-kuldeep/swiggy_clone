
import { useEffect, useState } from 'react';
import { Weather } from '@/utils/types';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import axios from 'axios';




const RestaurantsCardList = () => {
  const [restaurants, setRestaurants] = useState<Weather[]>([]);
  const [searchText, setSearchText] = useState<string>('')
  const [filteredRestaurant, setFilteredRestaurant] = useState<Weather[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        console.log('Fetching restaurants...');
        const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667')
        console.log('API response data:', response.data);
        if (response.data.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants && Array.isArray(response.data.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)) {
          console.log('Setting restaurants state');
          setRestaurants(response?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurant(response?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          
        } else {
          console.error("Invalid data format received from API", response.data);
          
          setError("Invalid data format received from API");
        }
      } catch (error) {
        setError('Error fetching restaurants');
        console.error('Error fetching restaurants:', error);
      } finally {
        setLoading(false);
        console.log('Finished fetching restaurants');
        
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
  

 




  return restaurants?.length === 0 ? <Shimmer /> : (
    <div>

        <div className='w-full mt-5 p-2'>
          <input type="text" value={searchText} className='border-1 bg-orange-600' onChange={((e) => setSearchText(e.target.value))} />
          <button className='bg-orange-600 p-1 rounded-xl' onClick={(() => {
            const filteredRestaurants = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(filteredRestaurants)
            })}>Search</button>
        </div>

      <div className='flex flex-wrap gap-5 p-10 items-center justify-center'>
        {filteredRestaurant?.map((restaurant) => (
          <div className='' key={restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>

  );
}

export default RestaurantsCardList
