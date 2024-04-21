import restObj from "../../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListofRestaurant] = useState(restObj);

  return (
    <div className="body">
      <div className="filter-grid">
        <div className="filter-main">
          <div className="filter-container">
            <div className="filter">
              <button
                className="filter-btn"
                onClick={() => {
                  const filteredList = listOfRestaurant.filter(
                    (res) => res.info.avgRating > 4.4
                  );
                  setListofRestaurant(filteredList);
                }}
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
