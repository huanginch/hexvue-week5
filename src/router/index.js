import { createRouter, createWebHashHistory } from "vue-router";
import ProductView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import CheckoutView from "../views/CheckoutView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Product",
      component: ProductView,
    },
    {
      path: "/cart",
      name: "Cart",
      component: CartView,
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: ProductDetailView,
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: CheckoutView,
    },
  ],
});

export default router;
