import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import LoginProvider from "./components/context/LoginContext";
import DataProvider from "./components/context/DataContext";
import Information from "./components/products/information/Information";
import Cart from "./components/products/cart/Cart";
import Login from "./components/auth/Login";
import Orders from "./components/orders/Orders";
import OrderProvider from "./components/context/OrderContext";
import About from "./components/about/About";

function App() {
  return (
    <>
      <LoginProvider>
        <DataProvider>
          <OrderProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/product/details" element={<Information />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/orders" element={<Orders />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
            <Footer />
          </OrderProvider>
        </DataProvider>
      </LoginProvider>
    </>
  );
}

export default App;
