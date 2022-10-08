<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;
    public function submits()
    {
        return $this->belongsToMany(submit::class, 'cours_student');
    }
}
