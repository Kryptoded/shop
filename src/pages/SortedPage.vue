<template>
  <div class="q-pa-md">
    <div class="text-h4">
      {{ namePage[props.productType] }}
    </div>
  </div>
</template>

<script setup>
const namePage = {
  doors: "Двери",
  instruments: "Инструменты",
  plumbing: "Сантехника",
  building_materials: "Строительные материалы",
  house_products: "Товары для дома",
  bath_products: "Товары для бани",
  fastener: "Крепёж"
};
const props = defineProps({
  productType: {
    type: String,
    default: ""
  }
});
</script>

<style scoped></style>
