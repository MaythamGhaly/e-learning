<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Auth;

Route::group(['middleware' => 'user.role'], function () {

    Route::post('/register', [AuthController::class, "register"])->name("Register");
    Route::post('/logout', [AuthController::class, "logout"])->name("Logout");
    Route::post('/add_courses', [AdminController::class, "addCourses"])->name("add-Courses");
    Route::post('/add_assignments', [AdminController::class, "addAssignments"])->name("add-Assignments");
    Route::post('/add_announcements', [AdminController::class, "addAnnouncement"])->name("add-Announcement");
    Route::get('/get_instructors', [AdminController::class, "getInstructors"])->name("get-Instructors");
    Route::post('/add-students', [InstructorController::class, "addStudents"])->name("add-Student");
    Route::get('/get_courses', [InstructorController::class, "getcourses"])->name("get-Courses");
    Route::post('/courses_register', [StudentController::class, "registeCourses"])->name("courses-Register");
    Route::get('/get_enrolled_courses', [StudentController::class, "getEnrolledCourses"])->name("get-Enrolled-Courses");
    Route::get('/get_enrolled_courses', [StudentController::class, "getEnrolledCourses"])->name("get-Enrolled-Courses");
    Route::get('/get_assignments', [StudentController::class, "getAssignments"])->name("get-Assignmets");
    Route::get('/get_announcements', [StudentController::class, "getAnnouncement"])->name("get-Announcement");






});


Route::post('/login', [AuthController::class, "login"])->name("login");