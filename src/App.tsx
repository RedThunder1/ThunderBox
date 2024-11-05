import React from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Playbar from './components/playbar/Playbar'
import Library from './components/library/Library'
import Login from './components/login/Login'
import CreateAccount from "./components/login/CreateAccount";
import ForgotPassword from "./components/login/ForgotPassword";

function App() {
    return (
      <>
          <Navbar/>
          <Playbar />
          <main>
              <Routes>
                  <Route path="/ThunderBox" element={<Home />}/>
                  <Route path="ThunderBox/library" element={<Library />}/>
                  <Route path="ThunderBox/login" element={<Login />}/>
                  <Route path="ThunderBox/createaccount" element={<CreateAccount />}/>
                  <Route path="ThunderBox/forgotpassword" element={<ForgotPassword/>}/>
              </Routes>
          </main>
      </>
  );
}

export default App;
