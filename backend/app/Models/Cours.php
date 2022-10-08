<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Cours extends Model
{
    use HasFactory;
    public function users()
    {
        return $this->belongsToMany(user::class, 'cours_user');
    }
}
