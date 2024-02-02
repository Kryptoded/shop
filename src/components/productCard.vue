<template>
  <q-card class="product-card" flat bordered>
    <q-img :src="props.image" :alt="props.image" />
    <div class="text-h6">{{ props.name }}</div>
    <price-component :price="props.price" :discount="props.discount" />
    <product-card-buttons :item="props" />
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
  },
  image: {
    type: String,
    default: ""
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
