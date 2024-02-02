<template>
  <q-page class="flex q-pa-md">
    <section>
      <div class="text-h4 q-mb-md">Акции!</div>
      <product-card v-for="product in products" :key="product.id" :="product" />
    </section>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "../boot/axios";
import { notify } from "../utils/notify";

import productCard from "src/components/productCard.vue";
const products = ref([]);
onMounted(async () => {
  api
    .get("products")
    .then(({ data }) => {
      products.value = data;
    })
    .catch((e) => {
      notify("Не удалось загрузить товары");
    });
});
</script>
