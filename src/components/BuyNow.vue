<script>
</script>

<template>
    <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center">Buy Now</h2>
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" id="name" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" id="email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Shipping Address</label>
                <textarea id="address" class="form-control" rows="3" required></textarea>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Payment Address</label>
                <textarea id="address" class="form-control" rows="3" required></textarea>
              </div>
              <div class="mb-3">
                <label for="payment" class="form-label">Payment Method</label>
                <select id="payment" class="form-select" required>
                  <option value="" disabled selected>Select payment method</option>
                  <option value="credit_card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>
              <div>
              <button type="submit" class="btn btn-primary">Place Order</button>
              <button type="submit" class="btn btn-bg-warning" @click="backToHome">Cancel Order</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    function backToHome(){
      router.push('/home');
    }
    
    return {
    };
  },
};
</script>