import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; // No need for BrowserRouter here
import '../src/App.css';
import MyNavbar from './Components/Navbar';
import Mycard from './Components/Card';
import MyLogin from './Components/Login';
import Mysign from './Components/signin';
import MyDeals from './Components/Deals';

function App() {
  const location = useLocation(); // Correctly using useLocation

  return (
    <div className="App">
      {/* Navbar is outside Routes so it will always render */}
      <MyNavbar /> 
      
      {/* Routes should only contain Route components */}
      <Routes>
        <Route path="/" element={<Mycard />} />
        <Route path="/login" element={<MyLogin />} />
        <Route path="/signin" element={<Mysign />} />
      </Routes>

      {/* Conditionally render MyDeals based on the current location */}
      {location.pathname === "/" && <MyDeals />}
    </div>
  );
}

export default App;
