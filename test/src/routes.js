import React from "react";
const Home = React.lazy(() => import("./components/pages/Home"));
const Shop = React.lazy(() => import("./components/pages/Shop"));
const About = React.lazy(() => import("./components/pages/About"));

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "shop", component: Shop, name: "Shop" },
  { path: "about", component: About, name: "About" },
];

export default routes;
