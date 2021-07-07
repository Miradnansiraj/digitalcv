<?php

namespace App\Http\Controllers;

use App\Models\Login;
use Illuminate\Http\Request;
use DB;

class IndexController extends Controller
{
    function loadView(){
        return view("index");
    }

    function loginAttempt(Request $request){
        $login = new Login;
        $username = $request->username;
        $check = DB::table('login')->where('username', $username)->pluck('username');
        if(strlen($check)> 0){
            $check = DB::table('login')->where('username', $username)->value('password');
            if($check == $request->password){
                //return "<h1>Hello $username</h1>";
                return  view("success", ["name"=>$username]);
            }
        }
        return view("index", ["message"=>"Incorrect credentials!"]);
    }
}
