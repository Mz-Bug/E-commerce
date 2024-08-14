<template>
  <main>
    <Header />
    <div class="container p-5">
      <div class="d-flex justify-content-start" id="back-btn">
        <button class="text" @click="$router.push('/home')">
          <i class="bi bi-arrow-left"></i>
        </button>
      </div>
      <div class="cart-items" v-if="cartItems.length">
        <div class="cart-item" v-for="item in cartItems" :key="item.id">
          <div class="item-details">
            <img :src="item.images[0]" alt="" />
            <span>
              <h5>Name:</h5>
              {{ item.title }}
            </span>
            <span>
              <h5>Price:</h5>
              ${{ item.price }}
            </span>
            <div class="form-outline" style="width: 4rem">
              <i class="fas fa-dollar-sign trailing"></i>
              <input
                type="number"
                v-model="quantity"
                id="form1"
                class="form-control form-icon-trailing"
              />
            </div>
            <button @click="removeFromCart(item)" class="btn btn-danger">
              Remove
            </button>
            <h1>{{ quantity }}</h1>
          </div>
          
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
    <button
      class="btn btn-success"
      id="cart-buy-btn"
      @click="$router.push('/buynow')"
    >
      Buy Now
    </button>
  </main>
</template>

<script>
import { defineComponent, computed } from "vue";

import { useMyStore } from "../stores/counter.js";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "CartView",
  components: {
    Header,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  setup() {
    const store = useMyStore();

    const removeFromCart = (item) => {
      store.removeFromCart(item);
    };

    const cartItems = computed(() => store.cartItems);

    return {
      store,
      removeFromCart,
      cartItems,
    };
  },
});
</script>

<style scoped>
.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}

.item-details img {
  width: 20%;
  height: 20%;
}
#cart-buy-btn {
  position: fixed;
  bottom: 5%;
  right: 3%;
}
#back-btn {
  padding: 12px 0;
}
#back-btn button {
  background-color: #fff;
  border: none;
}
#back-btn button i {
  font-size: 2rem;
}
</style>
