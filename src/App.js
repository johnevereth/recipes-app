import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import All from "./pages/All";
import Home from "./pages/Home";
import Baking from "./pages/Baking";
import Cakes from "./pages/Cakes";
import Cookies from "./pages/Cookies";
import Dinners from "./pages/Dinners";
import Fillings from "./pages/Fillings";
import Soups from "./pages/Soups";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/baking" element={<Baking />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/dinners" element={<Dinners />} />
        <Route path="/fillings" element={<Fillings />} />
        <Route path="/soups" element={<Soups />} />
      </Routes>
    </Layout>
  );
}

export default App;
