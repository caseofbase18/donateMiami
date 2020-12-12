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

  addFavorite: function(id) {
    return axios.post(`/api/nonProfits/${id}`);
  },

  removeFavorite: function(id) {
    return axios.delete(`/api/nonProfits/${id}`);
  },

  getFavorites: function() {
    return axios.get("/api/account");
  }, 
  
  saveTransaction: function(donationData) {
    return axios.post("/api/transaction", donationData);
  },

  getTransactions: function() {
    return axios.get("/api/transaction");
  },

  saveTime: function(volunteerData) {
    return axios.post("/api/time", volunteerData);
  }, 

  getTimes: function() {
    return axios.get("/api/time");
  },
  
};

