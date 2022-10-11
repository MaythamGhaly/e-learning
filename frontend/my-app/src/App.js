import { useState, useEffect } from "react";
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header"
import Login from "./components/Login"
import Admin from "./components/Admin"
import Instructors from "./components/Instructors";
import Student from "./components/Student"
import axios from "axios";
import './App.css';


function App() {

  // login function
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
    // componenet locations
    if (response.data.user.user_type == "admin") {
      window.location.href = 'http://localhost:3000/admin'
      return
    } else if (response.data.user.user_type == "instructor") {
      window.location.href = 'http://localhost:3000/instructor'
      return
    }
    window.location.href = 'http://localhost:3000/student'

  }

  // function let the admin to add courses and assign it to instructor
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
  
  // function let the admin to add users
  const register = async (user) => {

    const url = `http://127.0.0.1:8000/api/register`
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      user_type: user.user_type
    }
    const response = await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } })
      .then(function (response) {
        alert("User added!")
        return
      })
      .catch(function (error) {
        alert("fill all the informations and try again")
      });
  }

  // function let instructor to add student
  const addStudent = async (user) => {

    const url = `http://127.0.0.1:8000/api/add-students`
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      user_type: user.user_type
    }
    await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } })
      .then(function () {
        alert("Student added!")
      })
      .catch(function (error) {
        alert("fill all the informations and try again")
      });
  }

  // fuction to let instructor to add assignment
  const addAssignment = async (user) => {

    const url = `http://127.0.0.1:8000/api/add_assignments`
    const data = {
      the_assignment: user.assignment,
      cours_id: user.cours_id,
    }
    await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } })
      .then(function () {
        alert("Assignment added!")
      })
      .catch(function (error) {
        alert("fill all the informations and try again")
      });
  }

  // fuction to let instructor to add announcement
  const addAnnouncement = async (user) => {

    const url = `http://127.0.0.1:8000/api/add_announcements`
    const data = {
      the_Announcement: user.announcement
    }
    await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } })
      .then(function () {
        alert("Announcement added!")
      })
      .catch(function (error) {
        alert("fill all the informations and try again")
      });
  }
  
  // function let the students to submit assignments
  const submitAssignment = async (answer) => {

    const url = `http://127.0.0.1:8000/api/submit_assignments`
    console.log(answer)
    const data = {
      answer: answer
    }
    await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } })
      .then(function () {
        alert("Answer submited!")
      })
      .catch(function (error) {
        alert("write an answer")
      });
  }

  // function let the student to register a courses
  const registerCourses = async (courses) => {

    const url = `http://127.0.0.1:8000/api/courses_register`
    courses.map((cours) => {
      const data = {
        cours_name : cours.cours_name,
        cours_id : cours.id
      }
      console.log(data)
      
      axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } })
        .then(function () {
          alert("courses registered!")
        })
        .catch(function (error) {
          alert("fill all the informations and try again")
        });
    })
    
  }

  // routers
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Login onLogin={login} />} />
          <Route path="/admin" element={<Admin onAddUser={register} onAddCours={addCours} />} />
          <Route path="/instructor" element={<Instructors onAddStudent={addStudent} onAddAssignment={addAssignment} onAddAnnouncement={addAnnouncement} />} />
          <Route path="/student" element={<Student onRegister={registerCourses} onSubmitAnswer={submitAssignment} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
