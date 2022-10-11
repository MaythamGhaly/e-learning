<?php

namespace App\Http\Controllers;

use App\Models\CoursRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    public function registeCourses()
    {
        $id=auth::id();
        $Coursregister = new Coursregister;
        $cours_name=request()->cours_name;
        $student_id=request()->student_id;
        $Coursregister->cours_name = $cours_name;
        $Coursregister->student_id = $id;
        
        
        if ($Coursregister->save()) {
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'failed'
        ], 401);
    }
    
    public function getEnrolledCourses()
    {
        $id=auth::id();
        $courses = Coursregister::where('student_id',$id)->get();

        return response()->json([
            'status' => 'success',
            'courses'=>$courses
        ]);
    }
}
