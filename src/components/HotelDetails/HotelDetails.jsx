import "./HotelDetails.css"

export const HotelDetails = ({singleHotel}) => {

    const { hostName , 
        hostJoinedOn , 
        numberOfBeds, 
        numberOfguest , 
        numberOfBedrooms,
        numberOfBathrooms 
    } = singleHotel;

  return (
    <div className="hotel-details-container">
        <div className="host-details">
            <p className="host-name">Hosted by {hostName}, Joined on {hostJoinedOn}</p>
            <span className="span">{numberOfguest} guests. {numberOfBedrooms} bedrooms. {numberOfBeds} beds. {numberOfBathrooms} bathrooms</span>
        </div>
        <div className="key-features host-details">
            <div className="gutter-bottom-small">
                <p className="p d-flex align-center gap">
                    <span className="apps material-icons-outlined">apps</span>Dedicated workspace
                </p>
                <span className="span">
                    A common area with wifi 
                </span>
            </div>
            <div className="gutter-bottom-small">
                <p className="p d-flex align-center gap">
                    <span className="apps material-icons-outlined">apps</span>Great Location
                </p>
                <span className="span">
                    A common area with wifi 
                </span>
            </div>
            
            <p className="p d-flex align-center gap">
                <span className="apps material-icons-outlined">apps</span>GFree cancellation 
            </p>            
        </div>
        <div className="amenities-container host-details">
            <p className="p amenities">Whatthis place offera</p>
            <div className="d-flex gap-xxl">
                <div className="d-flex direction-column">
                    <span className="span d-flex align-center gap">
                        <span className="apps material-icons-outlined">apps</span>Kitchen
                    </span>
                    <span className="span d-flex align-center gap">
                        <span className="apps material-icons-outlined">apps</span>Freee parking
                    </span>
                    <span className="span d-flex align-center gap">
                        <span className="apps material-icons-outlined">apps</span>Dedicated workspace
                    </span>
                </div>
                <div className="d-flex direction-column">
                    <span className="span d-flex align-center gap">
                        <span className="apps material-icons-outlined">apps</span>Wifi
                    </span>
                    <span className="span d-flex align-center gap">
                        <span className="apps material-icons-outlined">apps</span>Washing
                    </span>
                    <span className="span d-flex align-center gap">
                        <span className="apps material-icons-outlined">apps</span>Balcony
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
