import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./MyName.css"
import NameComponent from "./MyName";
import MyName from './MyName';
import BrittaniImage from "./assets/Brittani.jpg";

function App() {
  return (
    <>
    <div className="centered-text">
    <h1>Hello, World!</h1>
    </div>
       
      <MyName name="Brittani" />
      <div className="image-container">
        <img src={BrittaniImage} alt="Brittani" />
      </div>
      
    </>
  )
}

export default App
