import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Products from "./Products";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App