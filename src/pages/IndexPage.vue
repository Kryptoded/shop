<template>
  <q-page class="flex q-pa-md" style="max-width: 100%">
    <section style="max-width: 100%">
      <div class="text-h4 q-mb-md">Акции!</div>
      <div class="row" style="max-width: 100%">
        <slider-component style="max-width: 100%">
          <product-card
            v-for="product in products"
            :key="product.id"
            :item="product"
            class="q-ma-md"
          />
        </slider-component>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "../boot/axios";
import { notify } from "../utils/notify";
import productCard from "src/components/productCard.vue";
import SliderComponent from "../ui/slider/sliderComponent.vue";

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
