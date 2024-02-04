import { ref } from "vue";
import productService from "src/services/productService";
import { notify } from "src/utils/notify";
export function useProduct() {
  const products = ref([]);
  const loading = ref(true);

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
    products,
    loading,
  };
}
