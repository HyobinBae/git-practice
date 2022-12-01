import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "../src/pages/Login";
import Main from "..src/pages/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
