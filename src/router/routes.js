const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "indexPage",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/products/:productType",
        name: "sortedPage",
        props: true,
        component: () => import("pages/SortedPage.vue"),
      },
      {
        path: "/item/:id",
        name: "productPage",
        props: true,
        component: () => import("pages/ProductPage.vue"),
      },
      {
        path: "/cart/",
        name: "cartPage",
        component: () => import("pages/CartPage.vue"),
      },
      {
        path: "/registration/",
        name: "registrationPage",
        component: () => import("pages/RegistrationPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
