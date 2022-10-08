<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Cours extends Eloquent
{
    use HasFactory;
    protected $collection = 'courses';
 
    
    protected $fillable = [
        'cours_name'
    ];

}