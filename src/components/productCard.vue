<template>
  <q-card class="product-card" flat bordered>
    <q-img src="../assets/linoleum_1.jpg" />
    <div class="text-h6">Линолеум</div>
    <price-component :price="500" :discount="300" />
    <product-card-buttons :item="{ id: 0, price: 300 }" />
  </q-card>
</template>

<script setup>
import PriceComponent from "components/PriceComponent.vue";
import productCardButtons from "./productCardButtons.vue";
const props = defineProps({
  name: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    default: 1000
  },
  discount: {
    type: Number,
    default: 0
  }
});
</script>

<style scoped>
.product-card {
  border-radius: 5px;
  width: 200px;
  height: 300px;
  padding: 10px;
  transition: all 0.25s ease;
  cursor: pointer;
}

.product-card:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px !important;
}
</style>
