import React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import SignIn from './pages/Login';
import './App.css';


function App() {
  return (
    <React.Fragment> 
      <BrowserRouter>     
        <SignIn />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
