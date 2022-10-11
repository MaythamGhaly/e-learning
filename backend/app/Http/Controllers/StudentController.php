<?php

namespace App\Http\Controllers;

use App\Models\CoursRegister;
use App\Models\Assignment;
use App\Models\Announcement;
use App\Models\Submit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    public function registeCourses()
    {
        $id=auth::id();
        $Coursregister = new Coursregister;
        $cours_name=request()->cours_name;
        $cours_id=request()->cours_id;
        $student_id=request()->student_id;
        $Coursregister->cours_name = $cours_name;
        $Coursregister->cours_id = $cours_id;
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
    
    public function submitAssignments()
    {
        $id=auth::id();
        $Submit = new Submit;
        $answer=request()->answer;
        $student_id=request()->id;
        $Submit->answer = $answer;
        $Submit->id = $id;

        
        if ($Submit->save()) {
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

    public function getAssignments()
    {
        $assignments = Assignment::get();

        return response()->json([
            'status' => 'success',
            'courses'=>$assignments
        ]);
    }

    public function getAnnouncement()
    {
        $assignments = Announcement::get();

        return response()->json([
            'status' => 'success',
            'courses'=>$assignments
        ]);
    }
}
