import React from "react";
import { HomePage } from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SessionsTable from "./pages/SessionsTable";
import { Runners } from "./pages/Runners";
import Copyright from "./components/Copyright";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/sign-in' element={<SignIn />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/sessions' element={<SessionsTable />}></Route>
          <Route path='/myPage' element={<SessionsTable />}></Route>
          <Route path='/runners' element={<Runners />}></Route>
        </Routes>
      </BrowserRouter>
      <Copyright sx={{ margin: 4 }} />
    </React.Fragment>
  );
}

export default App;
