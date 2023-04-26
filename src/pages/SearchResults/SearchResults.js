import { Fragment, useState , useEffect} from "react";
import axios from "axios";
import { HotelCard, Navbar , Alert} from "../../components"
import { useCategory, useDate , useAlert} from "../../context"

export const SearchResults = () => {

    const { destination } = useDate();
    const [ hotels , setHotels ] = useState([]);
    const { hotelCategory} = useCategory();
    const { alert } = useAlert();

    useEffect(() => {
        (async () => {
          try {
            const { data } = await axios.get(
              `https://breeze-travel-app.cyclic.app/api/hotels?category=${hotelCategory}`
            );
            setHotels(data);
          } catch (error) {
            console.log(error);
          }
        })();
      }, [destination]);

    const filteredSearchResults = hotels.filter(
        ({city , address , state}) => 
        address.toLowerCase() === destination.toLowerCase() ||
        city.toLowerCase() === destination.toLowerCase()||
        state.toLowerCase() === destination.toLowerCase()
    );

  return (
    <Fragment>
        <Navbar />
        <section className="main d-flex align-center gap-larger"> 
            {filteredSearchResults ? ( filteredSearchResults.map((hotel)=> <HotelCard key ={hotel._id} hotel = {hotel} />))
            :
            (
                <h3>Nothing Found</h3>
            )            
        }
        </section>
        {alert.open && <Alert />}
    </Fragment>
  )
}
