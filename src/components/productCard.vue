<template>
  <router-link :to="{ name: 'productPage', params: { id: item.id } }">
    <q-card class="product-card" flat bordered>
      <q-img :src="props.item.image" :alt="props.item.image" style="flex: 1" />
      <div class="text-h6">{{ props.item.name }}</div>
      <price-component
        :price="props.item.price"
        :discount="props.item.discount_price"
      />
      <product-card-buttons :item="props.item" />
    </q-card>
  </router-link>
</template>

<script setup>
import PriceComponent from "components/PriceComponent.vue";
import productCardButtons from "./productCardButtons.vue";
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px !important;
}
</style>
