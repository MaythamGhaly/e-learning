<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Auth;





Route::post('/register', [AuthController::class, "register"])->name("register");
Route::post('/login', [AuthController::class, "login"])->name("login");