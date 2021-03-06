<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('login', 'Auth\\LoginController@login')->name('login');
Route::post('register', 'Auth\\RegisterController@register')->name('register');
Route::get('logout', 'Auth\\LoginController@logout')->name('logout');
Route::get('check-auth', 'Auth\\LoginController@checkAuth')->name('logout');

Route::resource('categories', 'CategoryController');
Route::resource('posts', 'PostController');
Route::resource('tags', 'TagController');
Route::get('profile', 'UserController@profile');
Route::resource('users', 'UserController');
