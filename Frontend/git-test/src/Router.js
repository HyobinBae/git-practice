import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Main from "../src/pages/Main";
import Login from "../src/pages/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
