<template>
  <div class="search-product">
    <q-input
      v-model="search"
      style="width: 400px"
      clearable
      bg-color="white"
      color="black"
      dense
      filled
      ref="searchInput"
      placeholder="Поиск товаров"
      debounce="300"
      @update:model-value="findProducts"
    >
      <template #append>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-menu no-focus :target="searchInput" fit ref="menu">
      <q-list>
        <q-inner-loading :showing="loading" />
        <q-item v-if="!products.length">Не найдено</q-item>
        <q-item v-for="product in products" :key="product.id">
          {{ product.name }}
          {{ product.discount_price ? product.discount_price : product.price }}
          <q-icon name="currency_ruble" size="xs" />
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProduct } from "src/composables/useProduct";
const search = ref("");
const searchInput = ref(null);
const menu = ref(null);
const { loading, getProducts, products } = useProduct();

async function findProducts() {
  if (search.value) {
    menu.value.updatePosition();
    await getProducts({ name: search.value });
  } else {
    products.value = [];
  }
}
</script>

<style scoped></style>
