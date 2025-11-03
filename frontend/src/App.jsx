import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}></Route>
          <Route path="/" element={<UserLayout />}></Route>
          <Route path="/" element={<UserLayout />}></Route>
          <Route path="/" element={<UserLayout />}></Route>
          <Route path="/" element={<UserLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
