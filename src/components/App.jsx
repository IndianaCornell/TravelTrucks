import { Route, Routes } from "react-router-dom";
import clsx from "clsx";

import css from "./App.module.css";

import Navigation from "./Navigation/Navigation";
import Reviews from "./Reviews/Reviews";
import Features from "./Features/Features";
import TruckPage from "../pages/TruckPage/TruckPage";
import HomePage from "../pages/HomePage/HomePage";
import CatatalogPage from "../pages/CatalogPage/CatalogPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className={clsx(css.container)}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatatalogPage />} />
        <Route path="/catalog/:id" element={<TruckPage />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="features" element={<Features />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
