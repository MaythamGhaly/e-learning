<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class CoursRegister extends Eloquent
{
    use HasFactory;
    protected $collection = 'courses_registers';
 
    
    protected $fillable = [
        'cours_name',
        'student_id'
    ];
}
