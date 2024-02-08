import { defineStore } from "pinia";
import { api } from "src/boot/axios";
export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [],
  }),
  getters: {
    totalPrice: (state) => {
      return state.products.reduce((acc, item) => {
        return (acc += item.product.discount_price
          ? item.product.discount_price
          : item.product.price);
      }, 0);
    },
    totalCount: (state) => {
      return state.products.length;
    },
  },
  actions: {
    initialize() {
      return api.get("cart").then(({ data }) => {
        this.products = data;
      });
    },

    addToCart(productItem) {
      return api.post("cart/", { product: productItem.id }).then(({ data }) => {
        this.products.push(data);
      });
    },

    deleteFromCart(id) {
      return api.delete("cart/" + id + "/").then(({ data }) => {
        this.products = data;
      });
    },
  },
});
