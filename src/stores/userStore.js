import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    firstName: "",
    lastName: "",
    token: "",
    isAdmin: false,
  }),
  getters: {},
  actions: {
    setToken() {
      this.token = localStorage.getItem("token") || "";
    },
    setData(data) {
      this.setToken();
      this.lastName = data.last_name;
      this.firstName = data.first_name;
      this.isAdmin = data.is_superuser;
    },
    getUserByToken(token) {
      return api
        .get("auth/get_user", { params: { token } })
        .then(({ data }) => {
          this.setData(data);
        });
    },
    logout() {
      this.firstName = "";
      this.lastName = "";
      this.token = "";
      this.isAdmin = false;
    },
  },
});