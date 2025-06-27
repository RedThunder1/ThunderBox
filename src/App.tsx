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
import Playlist from './components/playlist/Playlist';
import Search from "./components/Search/Search";
import Settings from "./components/settings/Settings";

function App() {
    return (
      <>
          <Navbar/>
          <Playbar />
          <main>
              <Routes>
                  <Route path="/ThunderBox" element={<Home />}/>
                  <Route path="ThunderBox/library" element={<Library />}/>
                  <Route path="ThunderBox/playlist" element={<Playlist />}/>
                  <Route path="ThunderBox/login" element={<Login />}/>
                  <Route path="ThunderBox/createaccount" element={<CreateAccount />}/>
                  <Route path="ThunderBox/forgotpassword" element={<ForgotPassword/>}/>
                  <Route path="ThunderBox/search" element={<Search />}/>
                  <Route path="ThunderBox/settings" element={<Settings />}/>
              </Routes>
          </main>
      </>
  );
}

export default App;
