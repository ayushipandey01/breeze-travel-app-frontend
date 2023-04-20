import { createContext , useContext , useReducer } from "react";
import { dateReducer } from "../reducer";

const initialState = {
    destination: "",
    guests : 0,
    checkInDate : null,
    checkOutDate : null,
    isSearchModalOpen : false,
    isSearchResultOpen : true
}

const DateContext = createContext(initialState);

const DateProvider = ({children}) => {

    const [ {destination, guests, isSearchResultOpen , checkInDate , checkOutDate , isSearchModalOpen} , dateDispatch ] = useReducer(dateReducer , initialState);
    return <DateContext.Provider value={{destination, guests, isSearchResultOpen,  checkInDate , checkOutDate , isSearchModalOpen , dateDispatch}}>{children}</DateContext.Provider>
};

const useDate = () => useContext(DateContext);

export { useDate , DateProvider } 