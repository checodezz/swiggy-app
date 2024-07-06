import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines = [], costForTwoMessage } = restaurantInfo;

  const itemCardsArr =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card
      ?.card || {};
  const itemCards = itemCardsArr?.itemCards || [];

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* categories accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => toggleShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
