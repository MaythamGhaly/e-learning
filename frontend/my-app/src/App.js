import { useState, useEffect } from "react";
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header"
import Login from "./components/Login"
import axios from "axios";

import './App.css';

function App() {

  const login = async (user) => {
    let url = `http://127.0.0.1:8000/api/login`
    const data = {
      email: user.email,
      password: user.password
    }
    const response = await axios.post(url, data)
      .catch(function (error) {
        alert("incorrect email or password")
      });
    localStorage.setItem("token", response.data.access_token)
    localStorage.setItem("user", response.data.user._id)
    console.log(response.data.user.user_type)
    if (response.data.user.user_type == "admin") {
      window.location.href = 'http://localhost:3000/admin'
    } else if (response.data.user.user_type == "instructor") {
      window.location.href = 'http://localhost:3000/instructor'
    }
    window.location.href = 'http://localhost:3000/student'

  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/admin" element={<Admin onAddUser={register} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
