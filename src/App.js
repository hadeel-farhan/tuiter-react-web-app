import logo from './logo.svg';
import './App.css';
import React from 'react';
import Labs from "./Labs";
import HelloWorld from "./Labs/a6/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index
          element={<Labs />} />
        <Route path="/hello"
          element={<HelloWorld />} />
        <Route path="/home"
          element={<Tuiter />} />
        <Route path="/explore"
          element={<Tuiter />} />
        <Route path="/tuiter"
          element={<Tuiter />} />
        <Route path="/*" element={<Labs />} />
      </Routes>
    </ BrowserRouter>
  );
}
export default App;