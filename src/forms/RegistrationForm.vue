<template>
  <q-form @submit="submit">
    <q-input
      v-model="formData.username"
      outlined
      clearable
      label="Логин"
      :rules="[(val) => Boolean(val) || 'Поле обязательно']"
      class="q-mb-md"
    />
    <q-input
      v-model="formData.password"
      outlined
      clearable
      label="Пароль"
      class="q-mb-md"
      type="password"
      :rules="[(val) => Boolean(val) || 'Поле обязательно']"
    />
    <q-input
      v-model="formData.name"
      outlined
      clearable
      label="Имя"
      class="q-mb-md"
      :rules="[(val) => Boolean(val) || 'Поле обязательно']"
    />
    <q-input
      v-model="formData.second_name"
      outlined
      clearable
      label="Фамилия"
      :rules="[(val) => Boolean(val) || 'Поле обязательно']"
      class="q-mb-md"
    />
    <div class="row justify-end">
      <q-btn label="Отмена" color="negative" class="q-mr-md" />
      <q-btn label="Зарегистрироваться" color="positive" type="submit" />
    </div>
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "../composables/useAuth";
import { notify } from "../utils/notify";

const { registration } = useAuth();

const emit = defineEmits(["ok"]);

const formData = ref({
  username: "",
  password: "",
  first_name: "",
  second_name: "",
});

function submit() {
  registration(formData.value)
    .then(() => {
      notify("Зарегистрировано", "positive");
      emit("ok");
    })
    .catch((e) => {
      for (let key in Object.keys(e.response.data)) {
        notify(e.response.data[key][0]);
      }
    });
}
</script>
