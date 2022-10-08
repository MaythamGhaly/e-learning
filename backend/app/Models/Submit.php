<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Submit extends Model
{
    use HasFactory;
    public function assignments()
    {
        return $this->belongsToMany(assignment::class, 'submit_assignment');
    }
}
