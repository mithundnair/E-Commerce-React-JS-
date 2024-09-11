import React from 'react';
import '../src/App.css';
import MyNavbar from './Components/Navbar';
import Mycard from './Components/Card';
// import MyLogin from './Components/Login';

function App() {
  return (
    
    <div className="App">
      <MyNavbar/>
      <Mycard/>
      {/* <MyLogin/> */}
      </div>
  );
}

export default App;
