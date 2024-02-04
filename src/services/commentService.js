import { api } from "src/boot/axios";
export default {
  list(params = {}) {
    return api.get("comments/", { params });
  },
  create(formData) {
    return api.post("comments/", formData);
  },
};
