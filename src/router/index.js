import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import HomeView from "../views/HomeView.vue";
import productDetail from "../components/Product-Detail.vue";
import BuyNow from "../components/BuyNow.vue";
import Cart from "../views/cart.vue";

// import BuyNow from "../components/BuyNow.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      // meta: { requiresAuth: true },
    },
    {
      path: "/product_detail/:id",
      name: "product_detail",
      component: productDetail,
      // meta: { requiresAuth: true },
    },
    {
      path: "/buynow",
      name: "buynow",
      // meta: { requiresAuth: true },
      component: BuyNow,
    },
    {
      path: "/cart",
      name: "CartView",
      // meta: { requiresAuth: true },
      component: Cart,
    },
  ],
});
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token");

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     // This route requires auth, check if the token exists

//     if (!token) {
//       // If not logged in, redirect to login page with redirect query

//       next({
//         path: "/",

//         // query: { redirect: to.fullPath },
//       });
//     } else {
//       // If logged in, proceed to the destination

//       next();
//     }
//   } else {
//     // If no authentication is required, proceed to the destination

//     next();
//   }
// });

export default router;
