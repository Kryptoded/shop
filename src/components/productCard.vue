<template>
  <q-card class="product-card" flat bordered>
    <q-img src="../assets/linoleum_1.jpg" />
  </q-card>
</template>

<script setup>
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
  border-radius: 10px;
  width: 300px;
  height: 450px;
}
</style>
