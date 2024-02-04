import { api } from "src/boot/axios";

export default {
  list() {
    return api.get("products");
  },
  create(formData) {
    return api.post("products", formData);
  },
};
