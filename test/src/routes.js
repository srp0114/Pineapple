import React from "react";
const Home = React.lazy(() => import("./components/pages/Home"));
const Shop = React.lazy(() => import("./components/pages/Shop"));
const About = React.lazy(() => import("./components/pages/About"));
//const Login = React.lazy(() => import("./components/pages/Login"));
const Post = React.lazy(() => import("./components/pages/Post"));

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "shop", component: Shop, name: "Shop" },
  { path: "about", component: About, name: "About" },
  //{ path: "login", component: Login, name: "Login" },
  { path: "post", component: Post, name: "Post" }
];

export default routes;
