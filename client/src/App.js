import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Header from "./components/Header";
import Home from "./pages/LandingPage";
import Search from "./pages/Search";
import Product from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Adminpage from "./pages/Adminpage";
import Signup from "./pages/SignUp";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Checkout from "./pages/Checkout";
export const CartProduct = createContext();

function App() {
  const [CartItems, setCartItems] = useState([]);
  function addProductHandler(addedToCart) {
    setCartItems((prevCartProducts) => {
      return prevCartProducts.concat(addedToCart);
    });
  }
  function removeProductHandler(productId) {
    setCartItems((prevCartProduct) => {
      return prevCartProduct.filter((product) => product.id !== productId);
    });
  }
  function itemIsAddedToCartHandler(productId) {
    return CartItems.some((product) => product.id === productId);
  }

  const contextTemplete = {
    cart: CartItems,
    totalItemsInCart: CartItems.length,
    addToCart: addProductHandler,
    removeCart: removeProductHandler,
    itemIsAddedToCart: itemIsAddedToCartHandler,
  };

  return (
    <CartProduct.Provider value={contextTemplete}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/admin" exact>
            <Adminpage />
          </Route>
          <Route path="/admin/orders" exact>
            <Orders />
          </Route>
          <Route path="/admin/users" exact>
            <Users />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>
      </div>
    </CartProduct.Provider>
  );
}
export const contextTemplete = {};
export default App;
