<template>
  <q-card class="product-form">
    <q-item-label> Добавление товара</q-item-label>
    <q-form @submit.prevent="addProduct">
      <div class="form-section">
        <q-input v-model="formData.name" label="Имя товара" outlined />
        <div class="caption"></div>
      </div>
      <div class="form-section">
        <q-select
          v-model="formData.type_product"
          label="Категория товара"
          outlined
        />
      </div>
      <div class="form-section">
        <q-input v-model="formData.price" label="Цена товара" outlined />
        <div class="caption"></div>
      </div>
      <div class="form-section">
        <q-input
          v-model="formData.discount_price"
          label="Цена с учетом скидки"
          outlined
        />
        <div class="caption">Если скидки нет, то писать 0</div>
      </div>
      <div class="form-section">
        <q-input
          v-model="formData.description"
          label="Описание товара"
          outlined
        />
        <div class="caption"></div>
      </div>
      <div class="form-section">
        <q-file label="Изображение товара" v-model="formData.image" outlined>
          <template #append>
            <q-icon name="file" />
          </template>
        </q-file>
        <div class="caption"></div>
      </div>
      <div class="row justify-end">
        <q-btn label="Отменить" color="negative" class="q-mr-md" />
        <q-btn label="Добавить" color="primary" type="submit" />
      </div>
    </q-form>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
const formData = ref({
  price: 0,
  discount_price: 0,
  type_product: "",
  description: "",
  image: null,
  name: "",
});

function addProduct() {}
</script>

<style scoped>
.form-section {
  margin-bottom: 16px;
}

.product-form {
  padding: 16px;
}
</style>
