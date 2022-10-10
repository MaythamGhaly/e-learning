<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Auth;

Route::group(['middleware' => 'user.role'], function () {

    Route::post('/register', [AuthController::class, "register"])->name("register");
    Route::post('/logout', [AuthController::class, "logout"])->name("logout");
    Route::post('/add_courses', [AdminController::class, "addCourses"])->name("add-courses");
    Route::post('/add_assignments', [AdminController::class, "addAssignments"])->name("add-Assignments");
    Route::post('/add_announcements', [AdminController::class, "addAnnouncement"])->name("add-Announcement");
    Route::get('/get_instructors', [AdminController::class, "getInstructors"])->name("get-instructors");
    Route::post('/add-students', [AdminController::class, "addStudents"])->name("add-Student");





});


Route::post('/login', [AuthController::class, "login"])->name("login");