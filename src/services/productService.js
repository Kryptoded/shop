import { api } from "src/boot/axios";

export default {
  list(params) {
    return api.get("products", { params });
  },
  create(formData) {
    return api.post("products", formData);
  },
};
