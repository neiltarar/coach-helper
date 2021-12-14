import React from "react";
import NavBar from "./components/NavBar";
import { HomePage } from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SessionsTable from "./pages/SessionsTable";
import Copyright from "./components/Copyright";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/sign-in' element={<SignIn />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/sessions' element={<SessionsTable />}></Route>
        </Routes>
      </BrowserRouter>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </React.Fragment>
  );
}

export default App;
