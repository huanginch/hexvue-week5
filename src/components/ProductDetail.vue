<template>
  <div class="productDetail container d-flex justify-content-center">
    <img
      class="me-5 img-fluid"
      :src="targetProduct.imageUrl"
      :alt="targetProduct.title"
    />
    <div>
      <h1 class="mb-5">{{ targetProduct.title }}</h1>
      <h3>商品介紹</h3>
      <p class="productDescription">{{ targetProduct.description }}</p>
      <h3 class="mb-1">價格</h3>
      <p class="fs-3 text-primary mb-5 fw-bold">
        $NT {{ targetProduct.price }}
      </p>
      <div class="d-flex justify-content-between mb-5">
        <p>酒精濃度: {{}}</p>
        <p>產地: {{ targetProduct.country }}</p>
        <p>容量: {{}}</p>
      </div>
      <div class="d-flex justify-content-between">
        <input v-model="qty" type="number" min="1" class="me-3" />
        <button
          type="button"
          class="btn btn-outline-primary rounded-0 me-3"
          @click="addToCart(targetProduct.id, qty)"
        >
          加入購物車
        </button>
        <router-link
          to="/checkout"
          class="btn btn-primary rounded-0"
          @click="addToCart(targetProduct.id, qty)"
          >直接購買</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from "@/stores/cartStore.js";
import { mapActions } from "pinia";

export default {
  name: "ProductDetailView",
  props: ["targetProduct"],
  data() {
    return {
      qty: 1,
    };
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
  },
};
</script>

<style>
.productDetail {
  margin-top: 150px;
}

img {
  max-height: 500px;
}

.productDescription {
  max-width: 1000px;
}
</style>
