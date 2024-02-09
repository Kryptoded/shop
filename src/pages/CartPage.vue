<template>
  <div class="q-pa-md">
    <div class="text-h4">Корзина</div>
    <div class="row">
      <product-card
        v-for="item in uniqueCartItems"
        :key="item.id"
        :item="item"
        class="q-ma-md"
      />
    </div>
    <div class="row justify-end">
      <q-btn class="q-mr-md" label="Отменить" color="negative" />
      <q-btn label="Отправить" color="positive" @click="sendRequest" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useCartStore } from "src/stores/cartStore";
import productCard from "src/components/productCard.vue";
import { notify } from "src/utils/notify";
import { useRouter } from "vue-router";
const cart = useCartStore();

function checkOnUnique(arr, id) {
  return arr.some((item) => {
    return item.id === id;
  });
}

const uniqueCartItems = computed(() => {
  const uniqueMap = [];
  cart.products.forEach((item) => {
    if (!checkOnUnique(uniqueMap, item.product.id)) {
      uniqueMap.push(item.product);
    }
  });
  return uniqueMap;
});

function sendRequest() {
  cart.reset();
  notify("Вы успешно сделали заказ", "negative");
}

const router = useRouter();

onMounted(() => {
  if (!localStorage.getItem("token")) {
    notify("Сначала авторизируйтесь");
    router.replace({ name: "indexPage" });
  }
});
</script>

<style scoped></style>
