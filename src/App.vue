<template>
  <router-view />
</template>

<script setup>
import { useUserStore } from "./stores/userStore";
import { onMounted } from "vue";
import { useCartStore } from "./stores/cartStore";
import { api } from "./boot/axios";
const user = useUserStore();
const cart = useCartStore();

onMounted(async () => {
  if (localStorage.getItem("token")) {
    await user.getUserByToken(localStorage.getItem("token"));
    cart.initialize();
  }
});
</script>
