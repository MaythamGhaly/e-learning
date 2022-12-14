<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Announcement extends Eloquent
{
    use HasFactory;
    protected $collection = 'Announcements';
 
    
    protected $fillable = [
        'Announcement'
    ];
}
