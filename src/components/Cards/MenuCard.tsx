
// import { Card1 } from "@/data/data";
// import { CDN_URL } from "@/data/types";
// import { Star } from "lucide-react";


// interface MenuCardProps {
//     items : Card1
// }

// const MenuCard = ({items} : MenuCardProps ) => {

//     console.log("this is restaurant", items)


//     return (
//        <div>
//         {
//             items.itemCards.map((item) => (
//                 <div className="flex justify-center ">
//                 <div className='flex justify-between  mb-5 w-[60%] h-52 bg-gray-200 rounded-xl object-cover hover:scale-95 hover:duration-200'>
//                     <div>
//                         <h1 className="font-bold text-[#414449] text-lg leading-relaxed">{item.card.info.name}</h1>
//                         <p>₹ {item.card.info.price/100}</p>
    
//                         <p> <Star strokeWidth={2.25} className="bg-green-500 text-green-600" /> {item.card.info.ratings.aggregatedRating.rating}</p>
//                         <p>{item.card.info.description}</p>
//                     </div>
//                     <div className=''>
//                         <img
//                             src={CDN_URL + item.card.info.imageId}
//                             alt={item.card.info.name}
//                             className='object-cover bg-cover w-full h-36 rounded-xl '
//                         />
    
//                     </div> 
//                 </div>
//             </div>
//             ))
//         }
//        </div>
//     )
// };

// export default MenuCard

