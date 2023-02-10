<template>
  <nav class="navbar navbar-light bg-dark position-fixed start-0 end-0 top-0">
    <div class="container-fluid">
      <router-link class="navbar-brand text-primary" to="/"
        >WineWorld</router-link
      >
      <div>
        <router-link to="/" class="me-5 text-decoration-none"
          >產品列表</router-link
        >
        <router-link to="/cart" class="text-decoration-none">
          購物車
          <span class="badge bg-secondary rounded-pill">{{ totalCart }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import cartStore from "../stores/cartStore.js";
import { mapState } from "pinia";

export default {
  name: "NavBar",
  computed: {
    ...mapState(cartStore, ["totalCart"]),
  },
};
</script>

<style>
nav {
  z-index: 100;
}
</style>
