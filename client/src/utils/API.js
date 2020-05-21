// import axios from "axios";

//  const setAuthToken = token => {
//         if (token) {
//             //Apply authorization token to every request if logged in
//             axios.defaults.headers.commom["Authorization"] = token;
//         } else {
//             //Delete  auth header
//             delete axios.defaults.headers.common["Authorization"];
//         }
//     };
    
//     export default setAuthToken;


// export default {

//     registerUser: function(userData) {
//         return axios.post("/api/usersignup/register", userData)
//     },

//     loginUser: function (userData) {
//         return axios.post("/api/userlogin/authenticate", userData)
//     }