import { defineStore } from "pinia";

export const useMyStore = defineStore("myStore", {
  // State properties
  state: () => ({
    cart: 0,
    cartItems: [],
  }),

  // Getters
  getters: {
    // increment: (state) => state.count * 2,
  },

  // Mutations
  actions: {
    increment() {
      this.cart++;
    },
    addToCart(state, item) {
      state.cartItems.push(item);
    },
    removeFromCart(item) {
      const index = this.cartItems.indexOf(item);
      if (index > -1) {
        this.cartItems.splice(index, 1);
      }
    },
  },
});
