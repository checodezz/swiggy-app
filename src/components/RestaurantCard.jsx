import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  const deliveryTime = sla?.deliveryTime;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded hover:bg-gray-200">
      <img
        className="rounded"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo.toUpperCase()}</h4>
      <h4>{deliveryTime} Mins</h4>
    </div>
  );
};

export default RestaurantCard;
