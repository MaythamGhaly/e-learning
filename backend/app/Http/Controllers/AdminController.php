<?php

namespace App\Http\Controllers;

use App\Models\Cours;
use App\Models\Assignment;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminController extends Controller
{
    public function addCourses(Request $request)
    {
        $cours = new Cours;
        $cours_name=request()->cours_name;
        $cours->cours_name = $cours_name;
        
        if ($cours->save()) {
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'failed'
        ], 401);
    }

    public function addAssignments(Request $request)
    {
        $assignment = new Assignment;
        $the_assignment=request()->the_assignment;
        $assignment->the_assignment = $the_assignment;
        
        if ($assignment->save()) {
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'failed'
        ], 401);
    }

    public function addAnnouncement(Request $request)
    {
        $Announcement = new Announcement;
        $the_Announcement=request()->the_Announcement;
        $Announcement->the_Announcement = $the_Announcement;
        
        if ($Announcement->save()) {
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'failed'
        ], 401);
    }
}