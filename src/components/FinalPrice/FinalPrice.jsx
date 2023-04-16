import "./FinalPrice.css";

export const FinalPrice = () => {
  return (
    <div className="price-details-container d-flex direction-column gap shadow">
        <div className="price-rating d-flex align-center justify-space-between">
            <p><span className="fs-bold fs-large">Rs. 2999 </span>night</p>
            <span className="rating d-flex align-center">
                <span className="material-icons-outlined">star</span>
                <span>4.8</span>
            </span>            
        </div>
    </div>
  )
}
