import { useFilter } from "../../../context";

const numberOfAmeneties = ["Any" ,"1","2","3","4","5+"];

export const RoomsAndBeds = () => {

    const { filterDispatch , noOfBathrooms , noOfBedrooms , noOfBeds} = useFilter();

    const handleBedroomsClick = (number) => {
        filterDispatch({
            type : "BEDROOMS",
            payload : number
        })
    };

    const handleBedsClick = (number) => {
        filterDispatch({
            type : "BEDS",
            payload : number
        })
    };

    const handleBathroomsClick = (number) => {
        filterDispatch({
            type : "BATHROOMS",
            payload : number
        })
    };


  return (
    <div className="filter-container">
        <span className="filter-label">Rooms And Beds</span>
        <div className="d-flex align-center gap-large">
            <div className="d-flex direction-column gap">
                <span className="span-label">Bedrooms</span>
                <span className="span-label">Beds</span>
                <span className="span-label">Bathrooms</span>                
            </div>
            <div className="d-flex direction-column gap">
                <div>
                    {
                        numberOfAmeneties.map((number) => (<span className={`span-label room-count align-center justify-center cursor-pointer on-hover ${noOfBedrooms.toString() === number ? "selected" : ""}`} key={number} onClick={() => handleBedroomsClick(number)}>{number}</span>)
                    )}
                </div>
                <div>
                    {
                        numberOfAmeneties.map((number) => (<span className={`span-label room-count align-center justify-center cursor-pointer on-hover ${noOfBeds.toString() === number ? "selected" : ""}`} key={number} onClick={() => handleBedsClick(number)}>{number}</span>)
                    )}
                </div>
                <div>
                    {
                        numberOfAmeneties.map((number) => (<span className={`span-label room-count align-center justify-center cursor-pointer on-hover ${noOfBathrooms.toString() === number ? "selected" : ""}`} key={number} onClick={() => handleBathroomsClick(number)}>{number}</span>)
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}
