import { ref } from "vue";
import productService from "src/services/productService";
import { notify } from "src/utils/notify";

export function useProduct() {
  const products = ref([]);
  const loading = ref(true);
  const product = ref({});

  function getProducts(params = {}) {
    loading.value = true;
    return productService
      .list(params)
      .then(({ data }) => {
        products.value = data;
      })
      .catch(() => {
        notify("Не удалось загрузить товары");
      })
      .finally(() => {
        loading.value = false;
      });
  }

  function retrieve(id) {
    loading.value = true;
    return productService
      .retrieve(id)
      .then(({ data }) => {
        product.value = data;
      })
      .catch(() => {
        notify("Не удалось загрузить товар");
      })
      .finally(() => {
        loading.value = false;
      });
  }

  function createProduct(formData) {
    return productService
      .create(formData)
      .then(({ data }) => {
        products.value.push(data);
        return data;
      })
      .catch(() => {
        notify("Не удалось добавить товар");
      });
  }

  return {
    createProduct,
    getProducts,
    products,
    loading,
    product,
    retrieve,
  };
}
