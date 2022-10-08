<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{ 
    public function register(){

        $validator = validator()->make(request()->all(),[
            'name'=>'string|required',
            'email'=>'email|required',
            'password'=>'string|required',
            'user_type'=>'string|required',

        ]);
        if ($validator->fails()){
            return response()->json([
                'message' => 'registration faild!'
            ]);
        }
        $user = User::create([
            'name' => request()->get('name'),
            'email' => request()->get('email'),
            'password'=>bcrypt(request()->get('password')),
            'user_type'=>request()->get('gender'),

        ]);
        return response()-> json([
            'message'=>'User Created!',
            'user'=>$user
        ]);
    }

   public function login()
   {
       $credentials = request(['email', 'password']);

       if (! $token = auth()->attempt($credentials)) {
           return response()->json(['error' => 'Unauthorized'], 401);
       }

       return $this->respondWithToken($token);
   }

   public function me()
   {
       return response()->json(auth()->user());
   }

   protected function respondWithToken($token)
   {
       return response()->json([
           'access_token' => $token,
           'token_type' => 'bearer',
           'expires_in' => config('jwt.ttl')
       ]);
   }
}
