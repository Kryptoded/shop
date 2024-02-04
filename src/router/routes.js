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
