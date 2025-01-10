import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/guest/Home";
import About from "./pages/guest/About";
import Contacts from "./pages/guest/Contacts";
import AppLayout from "./components/AppLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import LoginPage from "./pages/admin/LoginPage";
import Products from "./pages/guest/Products";
import SingleProduct from "./pages/guest/SingleProduct";
import NotFoundPage from "./pages/guest/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* Guest routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          {/* FINE Guest routes */}

          {/* Admin routes */}
          <Route path="/admin">
            <Route path="login" element={<LoginPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
          {/* FINE Admin routes */}

          {/* 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
