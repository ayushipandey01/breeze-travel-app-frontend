import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  HotelCard,
  Navbar,
  ProfileDropDown,
  AuthModal,
  Alert,
} from "../../components";
import { useWishlist, useAuth, useAlert } from "../../context";
import "./Wishlist.css";

export const Wishlist = () => {
  const { isAuthModalOpen, isDropDownModalOpen } = useAuth();
  const { alert } = useAlert();
  const navigate = useNavigate();

  const handleClickHereClick = () => {
    navigate("/");
  };

  const { wishlist } = useWishlist();

  console.log(wishlist.length);
  return (
    <Fragment>
      <Navbar route="wishlists" />
      <h2 className="heading-wishlist d-flex justify-center">Your Wishlist</h2>
      {wishlist.length > 0 ? (
        <section className="wishlist-page d-flex align-center wrap gap-larger">
          {wishlist &&
            wishlist.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
        </section>
      ) : (
        <p className="wishlist-para d-flex justify-center">
          Wishlist Empty. &nbsp;
          <span className="click-here" onClick={handleClickHereClick}>
            Click here{" "}
          </span>{" "}
          &nbsp; to add to wishslist
        </p>
      )}
      {isDropDownModalOpen && <ProfileDropDown />}
      {isAuthModalOpen && <AuthModal />}
      {alert.open && <Alert />}
      {/* <section className="wishlist-page d-flex align-center wrap gap-larger">
            {
                wishlist && wishlist.map(hotel => <HotelCard key ={hotel._id} hotel={hotel} />)
            }
        </section> */}
    </Fragment>
  );
};
