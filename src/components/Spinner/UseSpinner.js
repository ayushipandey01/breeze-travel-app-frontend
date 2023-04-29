import Spinner from "react-bootstrap/Spinner";
import { Fragment } from "react";
import { Navbar } from "../Navbar/Navbar";
import "./UseSpinner.css";

export const UseSpinner = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="spinner-container">
        <div className="spinner-modal">
          <p className="spinner-text">Loading...</p>

          <div className="spinner">
            <Spinner animation="border">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
