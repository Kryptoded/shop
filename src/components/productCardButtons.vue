<template>
  <div class="row q-px-sm cart-buttons q-mt-sm">
    <q-btn
      icon="remove"
      color="primary"
      unelevated
      dense
      :disable="count <= 0"
      class="cart-button text-white no-padding"
      @click.prevent="minus"
      style="border-bottom-left-radius: 10px; border-top-left-radius: 10px"
    />
    <div
      class="count q-px-md bg-primary"
      style="height: 100%"
      :style="props.countStyle"
    >
      {{ count }}
    </div>
    <q-btn
      icon="add"
      color="primary"
      unelevated
      :disabled="isAuthorized"
      class="cart-button text-white no-padding"
      @click.prevent="add"
      style="border-bottom-right-radius: 10px; border-top-right-radius: 10px"
    >
      <q-tooltip>Добавить в корзину</q-tooltip>
    </q-btn>
  </div>
</template>

<script setup>
import { useCartStore } from "stores/cartStore";
import { useUserStore } from "src/stores/userStore";
import { computed } from "vue";
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  },
  countStyle: {
    type: String,
    default: ""
  }
});
const cartStore = useCartStore();
function add() {
  cartStore.addToCart(props.item);
}
function minus() {
  cartStore.deleteFromCart(props.item.id);
}

const count = computed(() => {
  return cartStore.products.reduce((acc, item) => {
    if (item.product.id === props.item.id) {
      acc++;
    }
    return acc;
  }, 0);
});

const user = useUserStore();

const isAuthorized = computed(() => {
  return Boolean(user.token);
});
</script>

<style scoped>
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
