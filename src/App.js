import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/App.css';
import MyNavbar from './Components/Navbar';
import Mycard from './Components/Card';
import MyLogin from './Components/Login';
import Mysign from './Components/signin';

function App() {
  return (
    
    <Router>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Mycard />} />
          <Route path="/login" element={<MyLogin />} />
          <Route path="/Signin" element={<Mysign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
