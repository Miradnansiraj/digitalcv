<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    //Use the login table from testdb
    protected $table = 'login';
    use HasFactory;
}
