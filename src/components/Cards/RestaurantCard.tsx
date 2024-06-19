import React from 'react';
import { Weather, CDN_URL, } from '@/utils/types';

interface RestaurantCardProps {
  restaurant: Weather;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className='bg-gray-50 w-72 h-72 rounded-xl object-cover hover:scale-95 hover:duration-200'>
      <div className=''>
      <img
        src={CDN_URL +  restaurant.info.cloudinaryImageId}
        alt={restaurant.info.name}
        className='object-cover bg-cover w-full h-48 rounded-xl '
        />
      </div>
        <p>{restaurant?.info?.aggregatedDiscountInfoV3?.header}</p>
      <h2 className='font-bold text-lg text-[#414449] ml-3'>{restaurant.info.name}</h2>
      <div className='flex gap-2 text-[#414449]'>
      <p className='flex gap-2 ml-3 text-md font-bold'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strok-width="2.00" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star   bg-green-600 text-white rounded-full mt-1 p-0.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> {restaurant.info.avgRating}</p>

      <p className='text-md font-bold'>{restaurant.info.sla.deliveryTime} mins</p>

      </div>
      <div className='text-md font-semibold ml-3 text-[#414449]'>
      <p className='whitespace-nowrap overflow-hidden overflow-ellipsis '>{restaurant.info.cuisines?.join(', ')}</p>
      <p>{restaurant.info.areaName}</p>
      </div>
      
    </div>
  );
};

export default RestaurantCard;
