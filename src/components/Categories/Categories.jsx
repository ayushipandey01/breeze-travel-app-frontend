import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory, useFilter } from "../../context/";
import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfcategoryToShow, setNumberOfcategoryToShow] = useState(0);
  const { hotelCategory, setHotelCategory } = useCategory();
  const { filterDispatch } = useFilter();

  const handleShowMoreRightClick = () => {
    setNumberOfcategoryToShow((prev) => prev + 10);
  };

  const handleShowMoreLeftClick = () => {
    setNumberOfcategoryToShow((prev) => prev - 10);
  };

  const handleFilterClick = () => {
    filterDispatch({
      type: "SHOW_FILTER_MODAL",
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://breeze-travel-app-28pc.onrender.com/api/category"
        );
        const categoriesToShow = data.slice(
          numberOfcategoryToShow + 10 > data.length
            ? data.length - 10
            : numberOfcategoryToShow,
          numberOfcategoryToShow > data.length
            ? data.length
            : numberOfcategoryToShow + 10
        );
        setCategories(categoriesToShow);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [numberOfcategoryToShow]);

  const handleCategoryClick = (category) => {    
    // setHotelCategory(category)
    // console.log(category);
    if(category !== "National Parks" && category !== "Tiny Homes"){
      // console.log("it is a Farm");
      setHotelCategory("National Parks");
    }
    else{
      setHotelCategory(category); 
    }
    // if(category !== "National Parks" || category !== "Tiny Homes"){
    //   setHotelCategory("National Parks");
    // }
    // else{
    //   console.log("jsjvjvj");
    //   setHotelCategory(category); 
    // }
  };
  // console.log("Hotel Category : " ,hotelCategory);

  return (
      <section className="categories d-flex align-center gap-large cursor-pointer shadow">
        {numberOfcategoryToShow >= 10 && (
          <button
            className="button btn-category btn-left fixed cursor-pointer"
            onClick={handleShowMoreLeftClick}
          >
            <span className="material-icons-outlined">chevron_left</span>
          </button>
        )}
        {categories &&
          categories.map(({ _id, category }) => (
            <span
              className={`span-category ${
                category === hotelCategory ? "border-bottom" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
              key={_id}
            >
              {category}
            </span>
          ))}
        {numberOfcategoryToShow - 10 < categories.length && (
          <button
            className="button btn-category btn-right fixed cursor-pointer"
            onClick={handleShowMoreRightClick}
          >
            <span className="material-icons-outlined">chevron_right</span>
          </button>
        )}
        <button
          className="button btn-filter d-flex align-center gap-small cursor-pointer fixed"
          onClick={handleFilterClick}
        >
          <span className="material-icons-outlined">filter_alt</span>
          <span>Filter</span>
        </button>
      </section>
  );
};
