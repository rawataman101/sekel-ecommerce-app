import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route
              path="products/product/:id"
              element={
                <>
                  <Header />
                  <ProductDetails />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <Header /> <ProductList />
                </>
              }
            />

            <Route
              path="/cart"
              element={
                <>
                  <Header />
                  <Cart />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header /> <Home />
                </>
              }
            />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
