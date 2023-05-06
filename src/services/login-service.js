import axios from "axios";

export const loginHandler = async (number, password) => {

  try {
    const {
        data : { accessToken, username },
    } = await axios.post(
      "https://breeze-travel-app.cyclic.app/api/auth/login",
      {
        number: number,
        password: password,
      }
    );
    // console.log({ accessToken , username });
    return { accessToken , username };
  } catch (error) {
    alert("Login Un-successful ! Please try again with valid credentials.")
    console.log("Unable to Login");
  }
};
