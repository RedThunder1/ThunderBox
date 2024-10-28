import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Playbar from './components/playbar/Playbar'
import Library from './components/library/Library'

function App() {
  return (
    <>
        <Navbar />
        <Playbar />
        <main>
            <Home />
        </main>
    </>
  );
}

export default App;
