import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
    );

    const json = await data.json();
    // console.log(json);

    setListOfRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        .restaurants
    );
    setFilteredRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  //exploring the world 1 hour 1 min~

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filterRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(filterRestaurants);
              setFilteredRestaurants(filterRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            // console.log(filteredList);
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
