import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Catalogue from "./pages/Catalogue.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </div>
  );
}

export default App;