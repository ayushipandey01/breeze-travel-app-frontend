import { useNavigate } from "react-router-dom";
import { useWishlist , useAuth} from "../../context";
import { findHotelInWishlist } from "../../utils";

import "./HotelCard.css";

export const HotelCard = ({ hotel }) => {
  const { _id, name, image, address, state, rating, price } = hotel;
  const { wishlistDispatch , wishlist } = useWishlist();
  const { accessToken , authDispatch} = useAuth();

  const navigate = useNavigate();

  const isHotelInWishlist = findHotelInWishlist(wishlist, _id);

  const handleHotelCardClick = () => {
    navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`);
  };

  const handleWishlistClick = () => {
    if(accessToken){
      if (!isHotelInWishlist) {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: hotel,
        });
        navigate ("/wishlist");
      }else{
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload : _id
        })
      }
    }
    else{
      authDispatch({
        type :"SHOW_AUTH_MODAL"
      })
    }    
  };

  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div onClick={handleHotelCardClick}>
        <img className="img" src={image} alt={name} />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location">
              {address}, {state}
            </span>
            <span className="rating d-flex align-center">
              <span className="material-icons-outlined">star</span>
              <span>{rating}</span>
            </span>
          </div>

          <p className="hotel-name">{name}</p>
          <p className="price-details">
            <span className="price">₹{price}</span>
            <span>night</span>
          </p>
        </div>
      </div>
      <div className="wishlist">
        <button
          className="button btn-wishlist absolute d-flex align-center"
          onClick={handleWishlistClick}
        >
          <span className={`material-icons favorite cursor ${isHotelInWishlist ? "fav-selected" : ""}`}>favorite</span>
        </button>
      </div>
    </div>
  );
};
