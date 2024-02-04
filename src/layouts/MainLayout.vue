<template>
  <q-layout view="lHh Lpr lFf">
    <q-dialog v-model="loginModal">
      <q-card>
        <login-form @success="loginModal = false" />
      </q-card>
    </q-dialog>
    <q-header reveal class="app-header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <router-link :to="{ name: 'indexPage' }">Стройматериалы</router-link>
        </q-toolbar-title>
        <q-input
          v-model="search"
          style="width: 400px"
          clearable
          bg-color="white"
          color="black"
          dense
          filled
          placeholder="Поиск товаров"
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-tabs>
          <q-route-tab
            icon="shopping_cart"
            :label="cartName"
            exact
            replace
            class="q-ml-md"
          >
            <q-badge
              v-if="totalCartCount"
              floating
              style="font-size: 14px; font-weight: 600"
              color="red"
              >{{ totalCartCount }}</q-badge
            >
          </q-route-tab>
          <q-route-tab
            :icon="loginIcon"
            :label="loginName"
            href="/#"
            class="q-ml-md"
            @click="openLoginModal"
          />
          <q-route-tab
            icon="settings"
            label="админ"
            target="_blank"
            href="http://127.0.0.1:8000/admin"
            class="q-ml-md"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="showDrawer" :mini="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Каталог </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    {{ cartStore.totalPrice }}
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import LoginForm from "../forms/LoginForm.vue";
import { useCartStore } from "src/stores/cartStore";
import { useUserStore } from "src/stores/userStore";
const linksList = [
  {
    title: "Двери",
    icon: "door_front",
    link: "doors",
  },
  {
    title: "Инструменты",
    icon: "handyman",
    link: "instruments",
  },
  {
    title: "Сантехника",
    icon: "shower",
    link: "plumbing",
  },
  {
    title: "Строительные материалы",
    icon: "carpenter",
    link: "building_materials",
  },
  {
    title: "Товары для дома",
    icon: "house_siding",
    link: "house_products",
  },
  {
    title: "Товары для бани",
    icon: "hot_tub",
    link: "bath_products",
  },
  {
    title: "Крепёж",
    icon: "square_foot",
    link: "fastener",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    LoginForm,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const showDrawer = ref(true);
    const search = ref("");
    const cartStore = useCartStore();
    const loginModal = ref(false);
    const user = useUserStore();

    const loginName = computed(() => {
      return user.token ? "Выйти" : "Войти";
    });
    const loginIcon = computed(() => {
      return user.token ? "logout" : "login";
    });
    function openLoginModal() {
      if (!user.token) {
        loginModal.value = true;
      } else {
        user.logout();
      }
    }
    const cartName = computed(() => {
      return cartStore.totalPrice ? cartStore.totalPrice : "Корзина";
    });
    const totalCartCount = computed(() => {
      return cartStore.products.length;
    });
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      loginName,
      openLoginModal,
      loginModal,
      loginIcon,
      search,
      showDrawer,
      cartName,
      totalCartCount,
      cartStore,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
.app-header {
  background-color: none;
  backdrop-filter: blur(10px);
}
</style>
