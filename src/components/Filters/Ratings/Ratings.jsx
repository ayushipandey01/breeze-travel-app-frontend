import { useFilter } from "../../../context";

const ratings = ["1","2","3","4","5"]

export const Ratings = () => {

  const { hotelRating , filterDispatch} = useFilter();

  const handleRatingsClick = (rating) => {
    filterDispatch({
      type: "RATING",
      payload : rating,
    })
  };

  return (
    <div className="filter-container">
      <span className="filter-label">Ratings</span>
      <div className="d-flex align-center gap">
        {
          ratings.map(rating => <span className={`span-label room-count star d-flex align-center justify-center cursor-pointer on-hover ${hotelRating === Number(rating) ? "selected" : ""}`} key={rating} onClick={() => handleRatingsClick(rating)}>{rating} &Up</span>)
        }
      </div>
    </div>
  )
}
