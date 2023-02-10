import { defineStore } from "pinia";
import axios from "axios";

export default defineStore("productStore", {
  //data, methods, computed for vue component
  //state, actions, getters for pinia store
  state: () => ({
    products: [],
    product: {},
    isGettingProducts: false,
    url: "https://vue3-course-api.hexschool.io/v2/api/",
    path: "int-hexschool",
  }),
  actions: {
    getProducts() {
      this.isGettingProducts = true;
      axios
        .get(`${this.url}${this.path}/products/all`)
        .then((response) => {
          this.isGettingProducts = false;
          this.products = response.data.products;
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    getProductById(productId) {
      this.isGettingProducts = true;
      axios
        .get(`${this.url}${this.path}/product/${productId}`)
        .then((res) => {
          this.isGettingProducts = false;
          this.product = res.data.product;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
});
