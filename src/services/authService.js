import { api } from "src/boot/axios";

export default {
  authenticate(params) {
    return api.post("auth/", params);
  },
  // registration(params) {
  //   return api.post('')
  // }
};
