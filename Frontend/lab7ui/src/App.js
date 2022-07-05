import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Create";
import ProductDetails from "./ProductDetails";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
