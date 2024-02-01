<template>
  <q-card class="product-card" flat bordered>
    <q-img src="../assets/linoleum_1.jpg" />
    <div class="text-h6">Линолеум</div>
    <price-component :price="500" :discount="300" />
    <div class="row q-px-sm cart-buttons q-mt-sm">
      <q-btn
        icon="remove"
        color="primary"
        unelevated
        dense
        :disable="count <= 0"
        class="cart-button text-white no-padding"
        @click="minus"
        style="border-bottom-left-radius: 10px; border-top-left-radius: 10px"
      />
      <div class="count q-px-md bg-primary" style="height: 100%">
        {{ count }}
      </div>
      <q-btn
        icon="add"
        color="primary"
        unelevated
        class="cart-button text-white no-padding"
        @click="add"
        style="border-bottom-right-radius: 10px; border-top-right-radius: 10px"
      />
    </div>
  </q-card>
</template>

<script setup>
import PriceComponent from "components/PriceComponent.vue";
import { ref } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 1000,
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const count = ref(0);
function add() {
  count.value++;
}
function minus() {
  count.value--;
}
</script>

<style scoped>
.product-card {
  border-radius: 25px;
  width: 200px;
  height: 300px;
  padding: 10px;
  transition: all 0.25s ease;
  cursor: pointer;
}

.count {
  border: 1px solid #ccc;
  border-top: none;
  border-bottom: none;
  color: white;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-card:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px !important;
}

.cart-buttons {
  height: 25px;
  align-items: center;
  justify-content: space-between;
}

.cart-button {
  transition: transform 0.15s ease;
  flex: 1;
  min-height: unset;
  height: 100%;
}

.cart-button:hover {
  transform: scale(1.1);
}
</style>
