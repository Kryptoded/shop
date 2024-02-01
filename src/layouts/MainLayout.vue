<template>
  <q-layout view="lHh Lpr lFf">
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

        <q-toolbar-title> Стройматериалы </q-toolbar-title>

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
        <q-btn
          unelevated
          color="primary"
          icon="login"
          label="Войти"
          size="md"
          class="q-ml-md"
        />
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Двери",
    icon: "door_front",
    link: "https://quasar.dev"
  },
  {
    title: "Инструменты",
    icon: "handyman",
    link: "https://github.com/quasarframework"
  },
  {
    title: "Сантехника",
    icon: "shower",
    link: "https://chat.quasar.dev"
  },
  {
    title: "Строительные материалы",
    icon: "carpenter",
    link: "https://forum.quasar.dev"
  },
  {
    title: "Товары для дома",
    icon: "house_siding",
    link: "https://twitter.quasar.dev"
  },
  {
    title: "Товары для бани",
    icon: "hot_tub",
    link: "https://facebook.quasar.dev"
  },
  {
    title: "Крепёж",
    icon: "square_foot",
    link: "https://awesome.quasar.dev"
  }
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const showDrawer = ref(true);
    const search = ref("");
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      search,
      showDrawer,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
});
</script>
<style>
.app-header {
  background-color: none;
  backdrop-filter: blur(10px);
}
</style>
