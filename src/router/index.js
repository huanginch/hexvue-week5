import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: () => import("../views/ProductDetailView.vue"),
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: () => import("../views/CheckoutView.vue"),
    },
  ],
});

export default router;
