import React, { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Foodmenu from "./Components/Foodmenu";
import Checkout from "./Components/Checkout";
import FoodcardItems from "./Components/FoodcardItems";
import data from "./feeds.json";
import Modals from "./Components/Modals";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {  Outlet} from "react-router-dom";


import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [products, setproduct] = useState(data);
  let [totalItem, settotal] = useState(0);
  const [open, setopen] = useState(false);
  const userCotent = useSelector((state) => state.user.user);

  let count = 0;
  let price = 0;

  function handlePlus(item) {
    let index = products.indexOf(item);
    products[index].count += 1;
    setproduct(products);
    products.forEach((element) => {
      count += element.count;
    });
    settotal(count);
  }
  function handleMinus(item) {
    let index = products.indexOf(item);
    products[index].count -= 1;
    setproduct(products);
    products.forEach((element) => {
      count += element.count;
    });
    settotal(count);
  }
  let itemsToCheckOut = products.filter((item) => {
    return item.count > 0;
  });
  products.forEach((element) => {
    price += element.price * element.count;
  });
  function PrivateRoute() {

    return (
      userCotent?<Outlet/>:<Navigate to="/"/>
    )
  }
  
  return (
    <div>
      <BrowserRouter>
        <Nav totalItem={totalItem} setopen={setopen} />

        <Modals open={open}>
          <div className="modalBody">
            <h3>Order Summary</h3>
            {itemsToCheckOut.map((item) => (
              <div className="modalContainer" key={item.name}>
                <div className="modalContent">
                  <span>{item.name}</span>
                  <span>{item.count}</span>
                  <div className="modalButtons">
                    <button className="plus" onClick={() => handlePlus(item)}>
                      +
                    </button>
                    <button className="minus" onClick={() => handleMinus(item)}>
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <span className="total">Total(INR):{price}</span>
            <div className="modalFooter">
              <Link to={"/checkout"}>
                <button onClick={() => setopen(false)}>
                  {" "}
                  Save and Checkout
                </button>
              </Link>
              <span onClick={() => setopen(false)}>Cancel</span>
            </div>
          </div>
        </Modals>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute/>} >
            <Route element={<Foodmenu />} path="/welcome" />
            <Route
            path="/menu"
            element={
              <FoodcardItems
                products={products}
                handlePlus={handlePlus}
                handleMinus={handleMinus}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
