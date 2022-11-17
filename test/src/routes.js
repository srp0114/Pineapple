import React from "react";
const Home = React.lazy(() => import("./components/layout/Card"));
const Shop = React.lazy(() => import("./components/layout/Shop"));
const About = React.lazy(() => import("./components/layout/About"));

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "shop", component: Shop, name: "Shop" },
  { path: "about", component: About, name: "About" },
];

export default routes;
