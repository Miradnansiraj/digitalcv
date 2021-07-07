<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    function loadView(){
        return view("dashboard", ["name"=>"Mir Adnan Siraj"]);
    }
}
