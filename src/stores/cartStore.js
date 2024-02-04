import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [],
  }),
  getters: {
    totalPrice: (state) => {
      return state.products.reduce((acc, item) => {
        return (acc += item.discount_price
          ? item.discount_price * item.count
          : item.price * item.count);
      }, 0);
    },
    totalCount: (state) => {
      return state.products.length;
    },
  },
  actions: {
    addToCart(productItem) {
      const index = this.products.findIndex(
        (item) => item.id === productItem.id
      );
      if (index !== -1) {
        this.products[index].count += 1;
      } else {
        this.products.push({ ...productItem, count: 1 });
      }
    },

    deleteFromCart(id) {
      const index = this.products.findIndex((item) => item.id === id);
      if (index === -1) {
        return;
      }
      if (this.products[index].count > 0) {
        this.products[index].count -= 1;
      }
      if (this.products[index].count === 0) {
        this.products.splice(index, 1);
      }
    },
  },
});
