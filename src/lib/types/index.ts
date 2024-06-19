export interface cardsProps {
    id? : number;
    costForTwo? : number;
    name? : string;
    avgRating? : number;
    deliveryTime? : string;
    cuisines? : string[];
    areaName? : string;
    cloudinaryImageId? : string;
  
  }

  export const CDN_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/';


  // setCardsData(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);