<template>
  <div class="row no-wrap items-center text-h5 text-amber-7 font-weight-bold">
    <div class="price" :class="{ 'price-discount': props.discount }">
      {{ props.price }}
    </div>
    <div class="discount q-ml-sm font-weight-bold" v-if="props.discount">
      {{ props.discount }}
    </div>
    <div class="q-ml-sm">
      <q-icon name="currency_ruble" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  price: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped>
.price {
  width: fit-content;
}
.price-discount {
  position: relative;
}
.price-discount::before {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 13px;
  height: 3px;
  background-color: var(--q-negative);
  content: "";
  transform: rotate(-45deg);
}
</style>
