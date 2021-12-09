import React from 'react';
import * as ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import { HomePage } from './pages/home';
import SignIn from './pages/Signin';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <React.Fragment> 
      <BrowserRouter>  
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
