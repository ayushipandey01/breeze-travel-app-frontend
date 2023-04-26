import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth, useDate, useAlert } from "../../context";
import {
  FinalPrice,
  HotelDetails,
  HotelImages,
  Navbar,
  AuthModal,
  ProfileDropDown,
  SearchStayWithDate,
  Alert,
} from "../../components";
import "./SingleHotel.css";

export const SingleHotel = () => {
  const { id } = useParams();

  const [singleHotel, setSingleHotel] = useState([]);

  const { isAuthModalOpen, isDropDownModalOpen } = useAuth();
  const { isSearchModalOpen } = useDate();
  const { alert } = useAlert();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://breeze-travel-app.cyclic.app/api/hotels/${id}`
        );
        setSingleHotel(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const { name, state } = singleHotel;

  return (
    <Fragment className = "relative">
      <Navbar />
      <main className="single-hotel-page">
        <p className="hotel-name-add">
          {name}, {state}
        </p>
        <HotelImages singleHotel={singleHotel} />
        <div className="d-flex">
          <HotelDetails singleHotel={singleHotel} />
          <FinalPrice singleHotel={singleHotel} />
        </div>
      </main>
      {isSearchModalOpen && <SearchStayWithDate />}
      {isDropDownModalOpen && <ProfileDropDown />}
      {isAuthModalOpen && <AuthModal />}
      {alert.open && <Alert />}
    </Fragment>
  );
};
