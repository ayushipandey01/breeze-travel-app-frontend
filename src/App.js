import { Route , Routes } from 'react-router-dom';
import './App.css';
import { UseSpinner } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home , SearchResults, SingleHotel , Wishlist, Payment , OrderSummary} from './pages';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels/:name/:address/:id/reserve' element ={ <SingleHotel />} />
        <Route path ='/hotels/:address' element ={<SearchResults />} />
        <Route path="/wishlists" element={<Wishlist />} />
        <Route path="/confirm-booking/stay/:id" element={<Payment />}/>
        <Route path = "/confirm/stay/payment/in-progress" element={<UseSpinner/>}/>
        <Route path="/order-summary" element={<OrderSummary />}/>
      </Routes>   
      
  );
}

export default App;
