import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { HotelCard, Navbar, Alert, AuthModal , ProfileDropDown } from "../../components";
import { useCategory, useDate, useAlert, useAuth } from "../../context";

export const SearchResults = () => {
  const { destination } = useDate();
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();
  const { alert } = useAlert();
  const { isAuthModalOpen , isDropDownModalOpen } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://breeze-travel-app-28pc.onrender.com/api/hotels?category=${hotelCategory}`
        );
        setHotels(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [destination]);

  const filteredSearchResults = hotels.filter(
    ({ city, address, state }) =>
      address.toLowerCase() === destination.toLowerCase() ||
      city.toLowerCase() === destination.toLowerCase() ||
      state.toLowerCase() === destination.toLowerCase()
  );

  console.log({isAuthModalOpen});

  return (
    <Fragment>
      <Navbar />
      <section className="main d-flex align-center gap-larger wrap">
        {filteredSearchResults ? (
          filteredSearchResults.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))
        ) : (
          <h3>Nothing Found</h3>
        )}
      </section>
      {isDropDownModalOpen && <ProfileDropDown />}
      {isAuthModalOpen && <AuthModal />}
      {alert.open && <Alert />}
    </Fragment>
  );
};
