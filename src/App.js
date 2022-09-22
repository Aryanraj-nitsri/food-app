import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Foodmenu from './Components/Foodmenu';
import Checkout from './Components/Checkout';
import FoodcardItems from './Components/FoodcardItems';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/welcome" element={<Foodmenu/>}/>
          <Route path="/menu" element={<FoodcardItems/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
