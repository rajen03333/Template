import React from "react";
import Login from './_component/common/auth/login';

  
  const routes = [
  { path: "/",name: "Dashboard" },
  { path: "#/dashboard",name: "Dashboard" },
  { path: "/dashboard",name: "Dashboard" },
  { path: "/login",name: "Login", component: Login },

  
];

export default routes;
