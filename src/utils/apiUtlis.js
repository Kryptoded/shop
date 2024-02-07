import { notify } from "./notify";
import { ref } from "vue";
class ApiUtils {
  api = undefined;
  url = "";

  constructor() {
    this.list = ref([]);
    this.instance = ref({});
    this.loading = true;
  }

  getList(params) {
    this.loading = true;
    return this.api
      .get(this.url + "/", { params })
      .then(({ data }) => {
        this.getList.value = data;
        return data;
      })
      .catch(() => {
        notify("Не удалось загрузить");
      })
      .finally(() => {
        this.loading = false;
      });
  }

  retrieve(pk) {
    this.loading = true;
    return this.api
      .get(this.url + "/" + pk + "/")
      .then(({ data }) => {
        this.instance = data;
        return data;
      })
      .catch(() => {
        notify("Не удалось загрузить");
      })
      .finally(() => {
        this.loading = false;
      });
  }

  create(formData) {
    return this.api
      .post(this.url + "/", formData)
      .then(({ data }) => {
        this.getList.push(data);
        notify("Добавлено", "positive");
        return data;
      })
      .catch(() => {
        notify("Не удалось добавить");
      });
  }
  update(pk, formData) {
    return this.api
      .patch(this.url + "/" + pk + "/", formData)
      .then(({ data }) => {
        notify("Обновлено");
        return data;
      })
      .catch(() => {
        notify("Не удалось обновить");
      });
  }
}
