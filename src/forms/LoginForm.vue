<template>
  <q-form class="q-pa-md" style="width: 350px" @submit.prevent="submit">
    <q-input
      v-model="formData.username"
      class="q-mb-md"
      outlined
      label="Имя пользователя"
    />
    <q-input
      v-model="formData.password"
      class="q-mb-md"
      outlined
      type="password"
      label="Пароль"
    />
    <div class="row justify-end items-center">
      <q-btn color="negative" v-close-popup label="Отменить" unelevated />
      <q-btn
        color="primary"
        class="q-ml-md"
        unelevated
        label="Войти"
        type="submit"
      />
    </div>
    <q-separator class="q-my-sm" />
    <div>Нет аккаунта?</div>
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "../composables/useAuth";

const emits = defineEmits(["success"]);
const formData = ref({
  password: "",
  username: "",
});

const { login } = useAuth();

function submit() {
  login(formData.value).then(() => {
    emits("success");
  });
}
</script>

<style></style>
