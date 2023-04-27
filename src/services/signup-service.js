import axios from "axios"

export const signupHandler = async(number , username ,  email , password) => {
  try {
    const data = await axios.post("https://breeze-travel-app.cyclic.app/api/auth/register" , {
         number : number , username: username , email : email , password : password
    })
    console.log("dataaa" , {data});
  } catch (error) {
    console.log("Error adding user to database" , error);
  }
}
