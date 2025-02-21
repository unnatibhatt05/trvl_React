import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Products from "./components/Pages/Products";
import SignUp from "./components/Pages/SignUp";
import Login from "./components/Pages/Login";
import Trailer from "./components/Pages/Trailer";
import Footer from "./components/Footer";
import "./App.css";

// ✅ Layout component to handle Navbar & Footer visibility
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavFooter = ["/sign-up", "/login"].includes(location.pathname); // Corrected path names

  return (
    <div>
      {!hideNavFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trailer" element={<Trailer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
