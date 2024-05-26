import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();

      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines = [], costForTwoMessage } = restaurantInfo;

  const itemCardsArr =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card || {};
  const itemCards = itemCardsArr?.itemCards || []; // <-- Highlighted line

  console.log(itemCards);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs."}
              {item.card.info.price / 100}
            </li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
