<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img width="100" height="100" class="img-fluid"
            src="../assets/images/OLX-Symbol.png" alt="Logo" @click="gotToHome"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="col-lg-12 col-md-12 col-sm-12" id="cart">
                <button style="display: block; margin-top: 15px; margin-right: 5px" type="button"
                  class="btn btn-sm btn-outline-primary position-relative" @click="goToCart">
                  <i class="bi bi-cart"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {{ store.cartItems.length }}
                  </span>
                </button>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-black" href="#" id="navbarDropdown" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false">
                <!-- <i class="bi bi-person mx-1"></i> Profile -->
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" class="rounded-circle img-fluid"
                  style="width: 40px" alt="Avatar" />
              </a>
              <!-- Dropdown menu -->
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">My account</a>
                </li>
                <li>
                  <a class="dropdown-item" style="cursor: pointer" @click="logout">Log out</a>
                </li>
              </ul>
            </li>
          </ul>

          <!-- <div class="col-lg-2 col-md-12 col-sm-12" id="cart">
                        <button class="btn btn-md btn-outline-primary" id="cart-btn" type="button">Add To Cart</button>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12" id="cart">
                        <button class="btn btn-md btn-outline-secondary" id="logout-btn" type="button">Log Out</button>
                    </div>
                    <div class="col-lg-1 col-md-12 col-sm-12" id="user-logo">
                        <p> <a href="#"><img class="img-fluid" src="../assets/images/user-logo.png" alt="User-logo"> </a></p>
                    </div> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useRouter } from "vue-router";
import { useMyStore } from "../stores/counter.js";
export default {
  name: "Header",
  setup() {
    const route = useRouter();
    const store = useMyStore();
    function logout() {
      localStorage.removeItem("token");
      route.push("/");
    }

    function goToCart(){
      route.push("/cart")
    }
    function gotToHome(){
      route.push("/home")
    }
    return {
      logout,
      store,
      goToCart,
      gotToHome,
    };
  },
};
</script>
<style scoped>
div#navbarSupportedContent ul>li #cart-btn i {
  font-size: 18px;
}
</style>
