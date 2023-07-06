import React from 'react';
import { BrowserRouter, Routes ,  Route } from 'react-router-dom';
import Header from './components/Header';
import Customers from './components/Customers';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';


function App() {
  return (
    // routes to naviage though components
    <><Header />
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Customers />} />
      <Route path="add" element={<AddCustomer />} />
      <Route path="edit/:id" element={<UpdateCustomer />} />
      </Routes>
    </BrowserRouter></>
      
  )
}

export default App;
