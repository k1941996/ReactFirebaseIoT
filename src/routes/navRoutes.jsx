import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "#pages/login";
import Home from "#pages/home";
import { UserAuth } from "#context/AuthContext";
import Header from "#components/Header";
import Protected from "#components/Protected";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route element={<Login />} index />
        <Route element={<Login />} path="/login" />
        <Route
          element={
            <Protected>
              <Home />
            </Protected>
          }
          path="/home"
        />
      </Route>
    </Routes>
  );
};

export default NavRoutes;
