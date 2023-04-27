import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialValue = {
  isAuthModalOpen: false,
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
  accessToken : "",
  name : "",
  selectedTab: "login",
  isDropDownModalOpen : false,
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [
    {
      number,
      username,
      email,
      password,
      confirmPassword,      
      accessToken,
      name,
      isAuthModalOpen,
      selectedTab,
      isDropDownModalOpen,
    },
    authDispatch,
  ] = useReducer(authReducer, initialValue);
  return (
    <AuthContext.Provider
      value={{
        number,
        username,
        email,
        password,
        confirmPassword,        
        accessToken,
        name,
        isAuthModalOpen,
        selectedTab,
        isDropDownModalOpen,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
