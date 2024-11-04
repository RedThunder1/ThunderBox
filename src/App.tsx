import React from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Playbar from './components/playbar/Playbar'
import Library from './components/library/Library'

function App() {
    return (
      <>
          <Navbar/>
          <Playbar />
          <main>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="library" element={<Library />}/>
              </Routes>
          </main>
      </>
  );
}

export default App;
