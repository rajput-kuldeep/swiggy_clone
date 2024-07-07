import { Link } from "react-router-dom";

const FooterPartOne = () => {
  return (
    <div className="w-full flex justify-center gap-14 mt-20 bg-[#F0F0F5] ">
      
      <div>
        <p className="text-3xl font-bold text-[#3D4047] ">For better experience,download <br /> the Swiggy app now</p>
      </div>
      <div className="flex gap-5">
        <Link to="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"><img src="play_store.avif" alt="" className="w-52"/></Link>
        
        
        <Link to="https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"><img src="app_store.png" alt="" className="w-48" /> </Link>
      </div>
    </div>
  )
};

export default FooterPartOne
