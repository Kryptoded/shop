<template>
  <div>
    <div style="width: 600px; margin: 0 auto">
      <div class="header">Регистрация</div>
      <registration-form @ok="goToMain" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import RegistrationForm from "../forms/RegistrationForm.vue";

const router = useRouter();

onMounted(() => {
  if (localStorage.getItem("token")) {
    router.replace({ name: "indexPage" });
  }
});

function goToMain() {
  router.replace({ name: "indexPage" });
}
</script>
<style>
.header {
  font-size: 24px;
  margin-bottom: 16px;
}
</style>
