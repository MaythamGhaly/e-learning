<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;


class Enrolled extends Eloquent
{
    use HasFactory;
    protected $collection = 'enrolleds';
 
    
    protected $fillable = [
        'cours_name',
        'student_id'
    ];
}
