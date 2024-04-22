import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-64 w-64">
  <div className="w-full h-32">
    <img className="w-full h-full object-cover" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
  </div>
  <div className="flex-grow p-4">
    <h2 className="text-gray-800 font-semibold text-lg">{name}</h2>
    <h5 className="mt-2 text-gray-600">{cuisines.join(", ")}</h5>
    <h6 className="text-gray-600">{area}</h6>
    <span className="flex items-center mt-4">
      <h4 className={avgRating < 4 ? "text-red-500 font-bold" : "text-white font-bold bg-green-500 rounded-full px-2"}>
        <i className="fa-solid fa-star"></i> {avgRating}
      </h4>
      <h4 className="ml-2 text-gray-700">{lastMileTravelString}</h4>
      <h4 className="ml-2 text-gray-700">{costForTwoString}</h4>
    </span>
  </div>
</div>

  );
};

export default RestaurantCard;