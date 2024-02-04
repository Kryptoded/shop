<template>
  <div class="q-pa-md">
    <div class="text-h4">
      {{ namePage[props.productType] }}
    </div>
    <div class="row">
      <product-card
        v-for="product in products"
        :key="product.id"
        :item="product"
      />
    </div>
  </div>
</template>

<script setup>
import { useProduct } from "../composables/useProduct";
import { onBeforeMount, watch } from "vue";
import productCard from "src/components/productCard.vue";
const namePage = {
  doors: "Двери",
  instruments: "Инструменты",
  plumbing: "Сантехника",
  building_materials: "Строительные материалы",
  house_products: "Товары для дома",
  bath_products: "Товары для бани",
  fastener: "Крепёж",
};
const props = defineProps({
  productType: {
    type: String,
    default: "",
  },
});
const { getProducts, products } = useProduct();

watch(
  props,
  async () => {
    await getProducts({ type_product: props.productType });
  },
  { deep: true }
);

onBeforeMount(async () => {
  await getProducts({ type_product: props.productType });
});
</script>
<style scoped></style>
