<?php

namespace App\Http\Controllers;

use App\Models\Cours;
use App\Models\Assignment;
use App\Models\User;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;

class InstructorController extends Controller
{
    public function addStudents()
    {

        $validator = validator()->make(request()->all(), [
            'name' => 'string|required',
            'email' => 'email|required',
            'password' => 'string|required',
            'user_type' => 'string|required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'registration faild!'
            ]);
        }
        $user = User::create([
            'name' => request()->get('name'),
            'email' => request()->get('email'),
            'password' => bcrypt(request()->get('password')),
            'user_type' => request()->get('user_type'),

        ]);
        return response()->json([
            'message' => 'User Created!',
            'user' => $user
        ]);
    }

    public function getcourses()
    {
        $id=auth::id();
        $courses = Cours::get();

        return response()->json([
            'status' => 'success',
            'courses'=>$courses
        ]);
    }
}