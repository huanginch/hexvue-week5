<template>
  <Navbar></Navbar>
  <body class="bg-dark"></body>
  <RouterView />
</template>

<script>
import Navbar from "./components/NavBar.vue";

import cartStore from "./stores/cartStore";
import { mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(cartStore, ["getCart"]),
  },
  mounted() {
    this.getCart();
  },
  components: {
    Navbar,
  },
};
</script>
