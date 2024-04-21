import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    console.log(props);
  const { name, cuisines, avgRating, areaName, sla, cloudinaryImageId } =
    props?.resData?.info;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="res-logo"
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {avgRating} Star {sla?.slaString}
      </h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;