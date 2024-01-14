import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';

import Home from './pages/Home';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './pages/Register/Register';
import UserDashboard from './pages/UserDashboard'
import { useState } from 'react';

function App() {
  
    return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        <Route path='/userDashboard' element={<UserDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home/>
     <LoginSignup/> */}
    </div>
  );
}

export default App;
