import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Catalogue from "./pages/Catalogue.js";
import Seller from "./pages/Seller.js";
import SearchBar from "./components/SearchBar.js";
import Footer from "./components/Footer.js";
import DetailsPage from "./pages/DetailsPage.js";
import Cart from "./pages/Cart.js";
import Blog from "./pages/Blog.js";
import BlogCard from "./components/BlogCard.js";
import Compose from "./pages/Compose.js";

function App() {
  return (
    <div className="content-center">
      <Navbar />
      <div className="sm:max-w-sm lg:max-w-7xl mx-auto">
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/sell" element={<Seller />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogcard" element={<BlogCard />} />
          <Route path="/compose" element={<Compose />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;