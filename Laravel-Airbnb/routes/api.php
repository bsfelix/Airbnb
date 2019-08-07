<?php

use Illuminate\Http\Request;

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

// Rotas da PassportController que não precisam de token
Route::post('login', 'API\PassportController@login');
Route::post('register', 'API\PassportController@register');

Route::group( ['middleware' => 'auth:api'], function() {
	
	// Rotas da PassportController que precisam de token
	Route::get('logout', 'API\PassportController@logout');
	Route::post('get-details', 'API\PassportController@getDetails');

	// Rotas para as reservas
	Route::get('reserva', 'ReservaController@index');
	Route::get('reserva/{id}', 'ReservaController@show');
	Route::post('reserva', 'ReservaController@store');
	Route::put('reserva', 'ReservaController@update');
	Route::delete('reserva/{id}', 'ReservaController@destroy');

});