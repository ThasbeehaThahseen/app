import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { KidsCategoryPage } from "./pages/KidsCategoryPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:gender" element={<CategoryPage />} />
          <Route path="/category/kids/:kidsGender" element={<KidsCategoryPage />} />
          <Route path="/products/:gender/:subcategory" element={<ProductsPage />} />
          <Route path="/products/:gender/:subcategory/:kidsGender" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
