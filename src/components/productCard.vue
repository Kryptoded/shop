<template>
  <q-card class="product-card"> </q-card>
</template>

<sctipt setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 1000
  },
  discount: {
    type: Number,
    default: 0
  }
})
</sctipt>

<style scoped>
.product-card {
  border-radius: 10px;
}
</style>
