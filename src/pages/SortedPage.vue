<template>
  <div>
    {{ props.productType }}
  </div>
</template>

<script setup>
const props = defineProps({
  productType: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
