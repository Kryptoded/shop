<template>
  <router-view />
</template>

<script setup>
import { useUserStore } from "./stores/userStore";
import { onMounted } from "vue";

const user = useUserStore();

onMounted(async () => {
  if (localStorage.getItem("token")) {
    await user.getUserByToken(localStorage.getItem("token"));
  }
});
</script>
