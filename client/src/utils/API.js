import axios from "axios";

export default {
  logIn:function(email,password) {
    return axios.post("/api/auth/login",{email,password});
  },
  verifyAuthentication:function() {
    return axios.get("/api/auth/login",{
      headers: {
        Authorization:localStorage.getItem("authorization-token")
      }
    })
  },

  signUp : function(userData) {
    return axios.post("/api/account", userData);
  },

  getNonProfits: function() {
    return axios.get("/api/nonProfits");
  },
  // addFavorite: function(id) {
  //   return axios.get("/api/nonProfits/:id");
  // }
  // push id into favorites array ??

  saveTransaction: function(donationData) {
    return axios.post("/api/transaction", donationData);
  },

  saveTime: function(volunteerData) {
    return axios.post("/api/time", volunteerData);
  }
  
};

