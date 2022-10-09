import { useState, useEffect } from "react";
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "./components/Header"
import Login from "./components/Login"
import axios from "axios";

import './App.css';

function App() {

  const login = async ( user) => {
    let url=`http://127.0.0.1:8000/api/login`
    const data ={
      email: user.email,
      password: user.password
    }
    const response =  await axios.post( url, data )
      localStorage.setItem("user" ,response.data.user._id, "token", response.data.access_token)
    
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={ <Login onLogin={ login } />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
