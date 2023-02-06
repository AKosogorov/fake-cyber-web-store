export const notFoundRoute = {
  path: "/*",
  name: "NotFoundPage",
  meta: {
    layout: "empty",
  },
  component: () => import("./NotFoundPage.vue"),
};
