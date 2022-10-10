import { useState, useEffect } from "react";
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header"
import Login from "./components/Login"
import Admin from "./components/Admin"
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
      .catch(function () {
        alert("incorrect email or password")
        return
      });
    localStorage.setItem("token", response.data.access_token)
    localStorage.setItem("user", response.data.user._id)
    if (response.data.user.user_type == "admin") {
      window.location.href = 'http://localhost:3000/admin'
      return
    } else if (response.data.user.user_type == "instructor") {
      window.location.href = 'http://localhost:3000/instructor'
    }
    window.location.href = 'http://localhost:3000/student'

  }

  const addCours = async (user) => {
    const url = `http://127.0.0.1:8000/api/add_courses`
    console.log(user.instructor_id, user.cours_name)
    const data = {
      cours_name: user.cours_name,
      instructor_id: user.instructor_id
    }
    const response = await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } })
      .then(function (response) {
        alert("cours added!")
        return
      })
      .catch(function (error) {
        console.log(error)
      });
  }
  const register = async (user) => {

    const url = `http://127.0.0.1:8000/api/register`
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      user_type: user.user_type
    }
    const response = await axios.post(url, data)
      .then(function (response) {
        alert("User added!")
        return
      })
      .catch(function (error) {
        alert("fill all the informations and try again")
      });
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Login onLogin={login} />} />
          <Route path="/admin" element={<Admin onAddUser={register} onAddCours={addCours} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
