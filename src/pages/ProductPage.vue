<template>
  <div class="q-pa-md">
    <q-inner-loading :showing="loading" />
    <div class="row">
      <q-img :src="product.image" class="img q-mr-md" />
      <div>
        <div class="text-h4">{{ product.name }}</div>
        <div class="description">
          {{ product.description }}
        </div>
      </div>
    </div>
    <div class="price">
      <price-component
        :price="product.price"
        :discount="product.discount_price"
      />
      <productCardButtons
        :item="product"
        countStyle="min-width: 70px; font-size: 24px"
        style="width: 200px; height: 30px"
      />
    </div>
    <div class="q-mt-md">
      <div class="text-h6">Комментарии:</div>
      <div class="column">
        <q-input
          v-model="textComment"
          type="textarea"
          placeholder="Добавить комментарий"
          outlined
        />
        <q-btn
          label="Добавить"
          color="primary"
          class="q-mt-md self-end"
          :disable="!isAuthorized"
          @click="addComment"
        >
          <q-tooltip v-if="!isAuthorized"
            >Для добавления комментария авторизируйтесь в системе</q-tooltip
          >
        </q-btn>
      </div>
      <div>
        <q-inner-loading :showing="commentLoading" />
        <ProductComment
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { useProduct } from "../composables/useProduct";
import PriceComponent from "src/components/PriceComponent.vue";
import productCardButtons from "src/components/productCardButtons.vue";
import { useUserStore } from "src/stores/userStore";
import { useComments } from "src/composables/useComments";
import ProductComment from "src/components/ProductComment.vue";

const props = defineProps({
  id: {
    type: Number,
    default: null
  }
});

const { loading, retrieve, product } = useProduct();
const {
  loading: commentLoading,
  getComments,
  comments,
  createComment
} = useComments();
const user = useUserStore();
const textComment = ref("");

function retrieveProduct() {
  return retrieve(props.id);
}

function getCommentsByProduct() {
  return getComments({ product: props.id });
}

async function addComment() {
  if (textComment.value) {
    await createComment({
      user: user.id,
      product: props.id,
      text: textComment.value
    });
  }
}

const isAuthorized = computed(() => {
  return Boolean(user.token);
});

onBeforeMount(async () => {
  await Promise.all([retrieveProduct(), getCommentsByProduct()]);
});
</script>

<style scoped>
.img {
  width: 350px;
  height: 350px;
  border-radius: 10px;
}

.price {
  font-size: 36px;
  display: flex;
  align-items: center;
}
</style>
